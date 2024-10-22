"use client";
import FtTransferTableNew from "@/components/tables/FtTransferTableNew";
import TransactionsTable from "@/components/tables/TransactionsTable";
import Pill from "@/components/ui/Pill";
import { useState } from "react";

const tabs = ["Transactions", "Token Txns"];

export default function Page({ params }: { params: { accountId: string } }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[80%]">
        <div className="mt-8 mb-4 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Pill
              key={tab}
              active={activeTab === tab ? true : false}
              setActive={() => {
                setActiveTab(tab);
              }}
            >
              {tab}
            </Pill>
          ))}
        </div>
        {activeTab === "Transactions" && (
          <TransactionsTable accountId={params.accountId} />
        )}
        {activeTab === "Token Txns" && (
          <FtTransferTableNew accountId={params.accountId} />
        )}
      </div>
    </div>
  );
}
