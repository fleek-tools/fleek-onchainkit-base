"use client";

import type React from "react";

import dynamic from "next/dynamic";

const WalletComponents = dynamic(
  () => import("./components/wallet").then((mod) => mod.WalletComponents),
  {
    ssr: false,
    loading: () => <div className="flex justify-end">Loading...</div>,
  }
);

export default function CoinbaseFleetTemplate() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">CoinFleek</div>
          <div className="space-x-4">
            <WalletComponents />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-8 font-steradian">
            Base + Fleek Next.js template
          </h1>
        </section>

        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-lg">
          <h2 className="text-6xl font-bold mb-4">With Base Pixel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            autem nulla distinctio incidunt hic odit in, iure, ullam ducimus
            quaerat nisi odio! Iste in, odit consequatur minima officia
            recusandae enim nihil illo accusamus dolore. Ullam, animi numquam.
            Alias totam eum cumque mollitia possimus voluptatum ipsam nam
            debitis molestiae dolore. Vero a qui, voluptatem unde accusantium
            odio iure quo aspernatur, facilis illo perspiciatis alias tempore
            perferendis voluptatibus nobis similique consequuntur! Quod
            consectetur quas, tempore repellendus modi nobis voluptas
            voluptatibus exercitationem nesciunt adipisci nisi minima
            dignissimos quo aperiam optio error. Perferendis maiores recusandae,
            id reprehenderit beatae quisquam, officiis necessitatibus pariatur
            alias ad quam nemo molestiae, earum possimus error harum architecto
            quos repellat sed iusto iure tenetur ea? Reprehenderit perferendis
            dolores rerum autem, commodi saepe nihil quaerat maiores atque
            quisquam harum, facilis dicta ad aut iste tenetur similique aperiam
            quod enim debitis accusamus placeat deleniti! Ut ipsa soluta illo
            voluptate iure, porro tempore natus? Harum, consequatur aliquam
            totam provident culpa facere! Assumenda doloremque explicabo sequi
            praesentium ab temporibus placeat ut natus dicta aperiam, sapiente,
            consectetur repellat quibusdam reprehenderit amet voluptate pariatur
            aliquid distinctio saepe esse voluptatem maiores. Qui assumenda
            autem tenetur nesciunt corrupti, rem maiores fuga, illo fugit a
            sequi atque expedita necessitatibus nam numquam possimus placeat ut
            deserunt facere temporibus? Voluptate nemo quaerat atque, veniam
            exercitationem, doloremque aperiam quo recusandae aliquam soluta
            repudiandae. Nemo fuga perferendis praesentium laborum, cupiditate
            dolores facere? Sunt obcaecati nesciunt saepe, necessitatibus ab
            magnam sint modi reprehenderit rerum consequatur hic! Minus earum ut
            maiores porro non libero alias dolorem recusandae? Corporis qui
            obcaecati repudiandae eum veniam itaque neque similique libero
            impedit fuga, in reprehenderit odit repellendus. Repudiandae maiores
            et eveniet vel quae, molestiae voluptatibus cumque aspernatur eos
            iste distinctio quis adipisci neque nisi ullam non dolore quod enim
            ex modi. Earum quos eaque eligendi, modi pariatur exercitationem
            animi beatae accusantium doloribus quisquam, nostrum quo voluptatem!
            Ipsa explicabo sapiente fugiat dignissimos qui? Vitae labore
            dignissimos exercitationem magni unde, quaerat nam, temporibus odit
            atque optio accusantium? Placeat magnam eius, et eveniet quae sed
            voluptatibus, nesciunt perspiciatis doloribus vitae tenetur error
            sunt ipsa illo, reprehenderit ipsam accusamus magni ullam ab
            incidunt repellat vero non? Quaerat ut, illum, qui omnis praesentium
            architecto neque cupiditate vitae fuga tenetur sequi magnam, laborum
            saepe facere. Doloremque consequatur voluptate provident cupiditate,
            neque consequuntur ducimus illum assumenda ab excepturi dicta, nihil
            distinctio atque libero! Pariatur, eum et consequatur unde corrupti
            dolorem aut, excepturi, dolores minima quos temporibus.
          </p>
        </section>
      </main>
    </div>
  );
}
