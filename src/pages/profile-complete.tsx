import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "../components/Button";
import Header from "../components/Header";
import Box from "../components/Box";
import { useRouter } from "next/router";

const ProfilePage: React.FC = () => {
  const router = useRouter(); // Initialize the router

  const handleViewOrganisation = () => {
    router.push("/profile-org"); // Redirect to '/profile-org'
  };
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto p-4">
        <section className="text-center my-10">
          <div className="inline-block relative p-4 rounded-full mb-4">
            <Image
              src="/avatar.png"
              alt="User Avatar"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <h2 className="text-4xl font-bold mb-2">
            Josh{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h2>
          <h3 className="text-xl font-semibold mb-6">Community Builder</h3>
          <p className="mb-4 px-4">
            Open to Work: Dedicated to adding value to the Integrated Web.
            Connect with m to discuss community growth strategies and building
            armies across the web and world.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button onClick={() => {}}>VIEW AVAILABILITY</Button>
            <Button onClick={() => {}}>EDIT PROFILE</Button>
            <Button onClick={handleViewOrganisation}>VIEW ORGANISATION</Button>
          </div>
        </section>

        {/* Ratings Section */}
        <section className="text-center my-16">
          <h3 className="text-2xl font-bold mb-4">Ratings</h3>
          <div className="flex justify-around items-center">
            <div>
              <Image
                src="/5stars.png"
                alt="Clarity of Scope rating"
                width={160}
                height={32}
              />
              <p className="font-semibold">Clarity of Scope</p>
            </div>
            <div>
              <Image
                src="/4stars.png"
                alt="Speed rating"
                width={128}
                height={32}
              />
              <p className="font-semibold">Speed</p>
            </div>
            <div>
              <Image
                src="/4stars.png"
                alt="Communication rating"
                width={128}
                height={32}
              />
              <p className="font-semibold">Communication</p>
            </div>
            <div>
              <Image
                src="/5stars.png"
                alt="Payment rating"
                width={160}
                height={32}
              />
              <p className="font-semibold">Payment</p>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap justify-center items-center my-10 gap-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-left">Top Skills</h3>
            <div className="space-y-2">
              <div className="text-left">
                <p className="font-semibold">Discord Management</p>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold">Growth Hacking</p>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold">Communication</p>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-left">Other Skills</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                "Communicating",
                "Content",
                "Coordination",
                "Growth",
                "Hosting",
                "Team Management",
                "Project Management",
                "Product Design",
              ].map((skill) => (
                <Box
                  key={skill}
                  className="border border-gray-500 p-2 rounded text-center"
                >
                  <p className="font-semibold">{skill}</p>
                </Box>
              ))}
            </div>
          </div>
        </section>

        <section
          id="congratulations"
          className="container mx-auto p-4 flex flex-col items-center justify-center"
        >
          {" "}
          <h1 className="text-4xl font-bold mb-6">Congratulations!</h1>
          <p className="text-xl mb-6">
            You have earned your 1st Soul Bound Credential. Keep up to great
            work.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-6">
            <Image
              src="/org1.png"
              width={200}
              height={200}
              alt="Organization Avatar"
              className="mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">D.D</h2>
            <p className="mb-4">Issued by: DevDAO</p>
          </div>
          <p className="mb-4">
            Contribute content for D_D Academy. Those writing, reviewing, and
            editing content on our education platform are playing a role central
            to Developer DAO's mission to onboard the next wave of web3
            contributors. Get started in the #d-d_ academy channel.
          </p>
          <Link href="/projects" passHref>
            <button className="mt-4 bg-purple-500 text-white font-bold py-2 px-4 rounded-full">
              Go to Project Board
            </button>
          </Link>
        </section>

        <footer className="flex flex-col items-center justify-between py-10">
          <div className="text-center mb-6">
            <p>SuperLancersAI</p>
            <p>
              A freelancer network built on trust and verifiable credentials
            </p>
          </div>
          <div className="mb-6">
            <Image
              src="/socials.png"
              alt="Social Links"
              width={120}
              height={40}
            />
          </div>
          <p>&copy; 2023 CredLancers, All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default ProfilePage;
