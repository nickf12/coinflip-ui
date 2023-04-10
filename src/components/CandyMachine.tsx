import { Integer } from "@dydxprotocol/v3-client";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types"
import { ChangeEvent, Component, MouseEvent } from "react"
import { ConstantineInfo } from './chain.info.constantine';
import { Coin, SigningStargateClient, StargateClient } from "@cosmjs/stargate"



declare global {
    interface Window extends KeplrWindow {}
}

const ContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const RPC = ConstantineInfo.rpc;

interface CandyMachineState {
    contract: string
    counter: Integer
    cwClient: string
    offlineSigner: string
    chainMeta: {}
    gasPrice: string
    queryHandler: string
    loadingStatus: boolean
    loadingMsg: string
    logs: []
    rpc: string
    accounts: string
    userAddress: string
}

export interface CandyMachineProps {
    counter: string
}
/*
export class FaucetSender extends Component<
    CandyMachineProps,
    CandyMachineState
    >{
            // Set the initial state
    constructor(props: CandyMachineProps) {
        super(props)
        this.state = {
            contract: ContractAddress
            counter: 0
            cwClient: null
            offlineSigner: null
            chainMeta: null
            gasPrice: string
            queryHandler: string
            loadingStatus: boolean
            loadingMsg: string
            logs: []
            rpc: string
            accounts: string
            userAddress: string
            
        }
        setTimeout(this.init, 500)
    }
    // Connecting to the endpoint to fetch the faucet balance
    init = async () =>
    this.updateFaucetBalance(
        await StargateClient.connect(this.props.rpcUrl),
    )

    // Get the faucet's balance
    updateFaucetBalance = async (client: StargateClient) => {
    const balances: readonly Coin[] = await client.getAllBalances(
        this.props.faucetAddress,
    )
    const first: Coin = balances[0]
    this.setState({
        denom: first.denom,
        faucetBalance: first.amount,
    })
    }


}
*/