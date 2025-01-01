import CustomButton from "./CustomButton";

function GetWallet(){
    return <>
        <h1 className="text-3xl font-bold text-white">Manage Your Wallet</h1>
        <p className="text-gray-400">Choose an option below to get started.</p>
        <div className="flex flex-col space-y-4">
        <CustomButton text="New Wallet" path="/new-wallet" />
        <CustomButton text="Import Wallet" path="/import-wallet" />
        </div>
        </>

}

export default GetWallet;