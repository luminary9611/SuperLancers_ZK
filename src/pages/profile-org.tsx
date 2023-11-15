import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Button from "../components/Button";
import BlackBox from "../components/BlackBox";
import PurpleButton from "../components/PurpleButton";

const OrgProfilePage: React.FC = () => {
  const handleViewProjects = () => {
    // Placeholder for view projects logic
  };

  const handleCreateProject = () => {
    // Placeholder for create project logic
  };

  return (
    <Layout>
      <main className="bg-black text-white min-h-screen">
        {/* Org Description and View Projects Button */}
        <section className="text-center pt-10">
          <Image
            src="/org1.png" // The organization avatar image path
            alt="Dev DAO Logo"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h1 className="text-4xl font-bold my-4">Dev DAO 💜</h1>
          <p className="mb-6">
          A DAO for Builders
          Build web3 with friends.
          Developer DAO is a community of thousands 
          of web3 builders creating a better internet. 
          Join us and create the future.
          </p>
          <Link href="/projects" passHref>
            <Button onClick={handleViewProjects}>VIEW PROJECTS</Button>
          </Link>
        </section>

        {/* Org Stats */}
        <section className="flex justify-around items-center my-10">
          <BlackBox onClick={() => {}} label="Credibility Level">
            <div className="text-center mt-2">
              <span className="text-xl font-bold">10</span>
            </div>
          </BlackBox>
          <BlackBox onClick={() => {}} label="Lancers Hired">
            <div className="text-center mt-2">
              <span className="text-xl font-bold">15</span>
            </div>
          </BlackBox>
          <BlackBox onClick={() => {}} label="Total Spent">
            <div className="text-center mt-2">
              <span className="text-xl font-bold">36 ETH</span>
            </div>
          </BlackBox>
        </section>

        {/* Ratings */}
        <section className="my-10">
          <div className="flex justify-around items-center">
            <div>
              <Image
                src="/5stars.png"
                alt="Clarity of Scope rating"
                width={160}
                height={32}
              />
              <p className="mt-2 font-semibold">Clarity of Scope</p>
            </div>
            <div>
              <Image
                src="/4stars.png"
                alt="Speed rating"
                width={128}
                height={32}
              />
              <p className="mt-2 font-semibold">Speed</p>
            </div>
            <div>
              <Image
                src="/5stars.png"
                alt="Communication rating"
                width={160}
                height={32}
              />
              <p className="mt-2 font-semibold">Communication</p>
            </div>
            <div>
              <Image
                src="/5stars.png"
                alt="Payment rating"
                width={160}
                height={32}
              />
              <p className="mt-2 font-semibold">Payment</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center my-10">
          <h2 className="text-3xl mb-6">You have no stats yet.</h2>
          <p className="mb-4">
            Go to your Dashboard and start posting projects for your community!
          </p>
          <Link href="/create-project" passHref>
          <PurpleButton onClick={handleCreateProject}>
            Create Project
          </PurpleButton>
          </Link>
        </section>

        {/* Members Section */}
        {/* Add your members section here */}

        {/* Footer */}
        <footer className="py-10">{/* Add your footer here */}</footer>
      </main>
    </Layout>
  );
};

export default OrgProfilePage;
