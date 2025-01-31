// lib/agentKit.ts
import { CdpAgentkit } from "@coinbase/cdp-agentkit-core";
import { CdpToolkit } from "@coinbase/cdp-langchain";
import { MemorySaver } from "@langchain/langgraph";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import * as fs from "fs";
import * as path from "path";

const WALLET_DATA_FILE = "wallet_data.txt";

let agent: any = null;
let agentConfig: any = null;

export async function getAgent() {
  if (agent) return { agent, config: agentConfig };

  // Initialize LLM
  const llm = new ChatOpenAI({
    model: "gpt-4-turbo-preview",
  });

  let walletDataStr: string | null = null;

  const walletPath = path.join(process.cwd(), WALLET_DATA_FILE);
  if (fs.existsSync(walletPath)) {
    try {
      walletDataStr = fs.readFileSync(walletPath, "utf8");
      console.log("Found existing wallet data");
    } catch (error) {
      console.error("Error reading wallet data:", error);
      walletDataStr = null;
    }
  }

  try {
    const config = {
      networkId: process.env.NETWORK_ID || "base-sepolia",
      cdpWalletData: walletDataStr || "",
      cdpApiKeyName:
        "organizations/d57d9dd7-f34b-444e-ae9a-2b9c08c7be1c/apiKeys/c8b323fc-270a-4a91-be86-5663a6114ae7",
      cdpApiKeyPrivateKey:
        "MHcCAQEEILYwJES/YuJRgPI1wSPd7iUKI2kGzOhSSes8DH9kLQ7RoAoGCCqGSM49\nAwEHoUQDQgAEIiUs8jqcD2xF3zdIFxpkGEUxtHb6roDXXGyXLbb6yX27sBjOfmEs\nzgcNbL8ZTuVSD9veEy7zIh/VgaJzbycKy",
    };

    if (!config.cdpApiKeyName || !config.cdpApiKeyPrivateKey) {
      throw new Error(
        "Missing required configuration: CDP_API_KEY_NAME or CDP_API_KEY_PRIVATE_KEY"
      );
    }

    console.log("Initializing with config:", {
      ...config,
      CDP_API_KEY_PRIVATE_KEY: "[REDACTED]",
      cdpWalletData: walletDataStr ? "[EXISTS]" : "[MISSING]",
    });

    const agentkit = await CdpAgentkit.configureWithWallet(config);

    if (agentkit) {
      const exportedWallet = await agentkit.exportWallet();
      fs.writeFileSync(walletPath, exportedWallet);
      console.log("Saved wallet data to file:", walletPath);
    }

    const cdpToolkit = new CdpToolkit(agentkit);
    const tools = cdpToolkit.getTools();

    const memory = new MemorySaver();
    agentConfig = { configurable: { thread_id: "CDP AgentKit Example!" } };

    agent = createReactAgent({
      llm,
      tools,
      checkpointSaver: memory,
      messageModifier:
        "You are a helpful agent that can interact onchain using the Coinbase Developer Platform AgentKit.",
    });

    return { agent, config: agentConfig };
  } catch (error) {
    console.error("Failed to initialize agent:", error);
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
      });
    }
    throw error;
  }
}
