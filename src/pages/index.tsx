import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "../components/Button";

import BlackBox from "../components/BlackBox";

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      <main className="container mx-auto px-4">
        <section className="flex items-center py-12">
          <div className="flex-1 min-w-0">
            <h1 className="text-gradient text-5xl font-bold">SuperLancersAI</h1>
            <p className="text-xl my-8">
              A privacy-preserving talent platform built on trust and verifiable
              credentials
            </p>
            <div className="flex gap-4">
              <Link href="/projects" passHref>
                <BlackBox label="FIND PROJECTS" onClick={() => {}} />
              </Link>
              <Link href="/projects" passHref>
                <BlackBox label="CREATE PROJECT" onClick={() => {}} />
              </Link>
            </div>
          </div>
          <div className="flex-1" style={{ maxWidth: "35%", marginLeft: "0%" }}>
            {" "}
            {/* Reduced size and reset margin */}
            <Image
              src="/landingPic.png"
              alt="Landing Picture"
              layout="responsive"
              width={525} /* Reduced width */
              height={356.25} /* Reduced height */
            />
          </div>
        </section>

        <section className="grid grid-cols-3 gap-4 py-12 text-center">
          <div className="space-y-4">
            <div className="inline-block relative w-32 h-32 mx-auto">
              {" "}
              {/* Adjust the size as needed */}
              <Image
                src="/onchain.png"
                alt="On-chain"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="text-2xl font-semibold">On-chain</h2>
            <p>Everything on-Chain and trackable on Starknet.</p>
          </div>
          <div className="space-y-4">
            <div className="inline-block relative w-32 h-32 mx-auto">
              {" "}
              {/* Adjust the size as needed */}
              <Image
                src="/verified.png"
                alt="Verified"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="text-2xl font-semibold">Verified</h2>
            <p>Profiles of Organisations and Superlancers verified.</p>
          </div>
          <div className="space-y-4">
            <div className="inline-block relative w-32 h-32 mx-auto">
              {" "}
              {/* Adjust the size as needed */}
              <Image
                src="/interoperable.png"
                alt="Interoperable"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="text-2xl font-semibold">Interoperable</h2>
            <p>All interoperable on Starknet.</p>
          </div>
        </section>

        <section className="flex justify-between items-end py-12">
          <div>
            <p className="text-gradient text-lg">SuperLancersAI</p>
            <p>
              A freelancer network built on trust and verifiable credentials
            </p>
          </div>
          <div className="relative w-48 h-12">
            {" "}
            {/* Adjust the width and height as needed */}
            <Image
              src="/socials.png"
              alt="Socials"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>

        <section className="py-4 text-center">
          <p>&copy; 2023 CredLancers, All rights reserved.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
