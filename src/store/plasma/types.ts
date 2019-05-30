
import BN from "bn.js"
import { Client } from "loom-js"
import Contract from "web3/eth/contract"
import { MigratedZBGCard } from "@/contracts/types/web3-contracts/MigratedZBGCard"
import { UserDeployerWhitelist } from "loom-js/dist/contracts";
import { UserDeployerState } from 'loom-js/dist/proto/user_deployer_whitelist_pb';

export interface HasPlasmaState {
    plasma: PlasmaState
}

export interface PlasmaState {
    client: Client|null,
    balances: {
        [erc20Symbol: string]: BN,
    },
    packsContract: {
        [name: string]: Contract,
    },
    cardContract: MigratedZBGCard | null,
    cardBalance: CardDetail[],
    packBalance: PackDetail[],
    cardToTransferSelected: CardDetail | {},
    allCardsToTransferSelected: {
        edition: string
        cards: CardDetail[]
        amount: number,
    }
    packToTransferSelected: {
        type: string,
        amount: number,
    } | {}
    userDeployerWhitelist: UserDeployerWhitelist | null
    userDeployersAddress: UserDeployerState[] | []
}

export interface PackDetail {
    type: string,
    amount: number,
}

export interface CardDetail {
    id: string
    amount: number
    display_name: string
    image: string
    title: string
    variant: string
    variation: string
    mould_type: string
    element: string
    originalID: string
}

export enum TierID {
    DEFAULT = 0,
}
