import Vue from 'vue'

import Header from '@/components/Header'
Vue.component('Header', Header)

import Footer from '@/components/Footer'
Vue.component('Footer', Footer)

import HpTxContainer from '@/components/HomePage/TxContainer'
Vue.component('hp-tx-container', HpTxContainer)

import HpBlockContainer from '@/components/HomePage/blockContainer'
Vue.component('hp-block-container', HpBlockContainer)

import LatestBlocks from '@/components/LatestBlocks/LatestBlocks'
Vue.component('LatestBlocks', LatestBlocks)

import Block from '@/components/Block/Block'
Vue.component('Block', Block)

import LatestTransaction from '@/components/LatestTransaction/LatestTransaction'
Vue.component('LatestTransaction', LatestTransaction)

import TxPagination from '@/components/LatestTransaction/TxPagination'
Vue.component('TxPagination', TxPagination)

import IndividualTransaction from '@/components/IndividualTransaction/IndividualTransaction'
Vue.component('IndividualTransaction', IndividualTransaction)

import SingleAccount from '@/components/SingleAccount/SingleAccount'
Vue.component('SingleAccount', SingleAccount)

import TopNav from "@/components/TopNav"
Vue.component('topnav', TopNav)

import * as Icon from 'vue-awesome'
import 'vue-awesome/icons'
Vue.component('icon', Icon)


/* NewHome ############################################################################## */


    /* Frames ---------------------- */
    import FramesMainFrame from "@/components/NewHome/Frames/FramesMainFrame"
    Vue.component('FramesMainFrame', FramesMainFrame)

    import FramesHome from "@/components/NewHome/Frames/FramesHome"
    Vue.component('FramesHome', FramesHome)

    import FramesAbout from "@/components/NewHome/Frames/FramesAbout"
    Vue.component('FramesAbout', FramesAbout)

    import FramesFAQ from "@/components/NewHome/Frames/FramesFAQ"
    Vue.component('FramesFAQ', FramesFAQ)

    import FramesContact from "@/components/NewHome/Frames/FramesContact"
    Vue.component('FramesContact', FramesContact)

    import FramesIndividualTransaction from "@/components/NewHome/Frames/FramesIndividualTransaction"
    Vue.component('FramesIndividualTransaction', FramesIndividualTransaction)

    import FramesBlock from "@/components/NewHome/Frames/FramesBlock"
    Vue.component('FramesBlock', FramesBlock)

    import FramesLastTransactions from "@/components/NewHome/Frames/FramesLastTransactions"
    Vue.component('FramesLastTransactions', FramesLastTransactions)

    import FramesLatestBlocks from "@/components/NewHome/Frames/FramesLatestBlocks"
    Vue.component('FramesLatestBlocks', FramesLatestBlocks)




    /* Menu ---------------------- */
    import MenusTop from "@/components/NewHome/Sections/Menus/MenusTop"
    Vue.component('MenusTop', MenusTop)

    import MenusSide from "@/components/NewHome/Sections/Menus/MenusSide"
    Vue.component('MenusSide', MenusSide)



    /* ShortData ---------------------- */
    import ShortDataLastBlock from "@/components/NewHome/Sections/ShortData/ShortDataLastBlock"
    Vue.component('ShortDataLastBlock', ShortDataLastBlock)
    
    import ShortDataTimeSinceLastBlock from "@/components/NewHome/Sections/ShortData/ShortDataTimeSinceLastBlock"
    Vue.component('ShortDataTimeSinceLastBlock', ShortDataTimeSinceLastBlock)

    import ShortDataHashRate from "@/components/NewHome/Sections/ShortData/ShortDataHashRate"
    Vue.component('ShortDataHashRate', ShortDataHashRate)

    import ShortDataDifficulty from "@/components/NewHome/Sections/ShortData/ShortDataDifficulty"
    Vue.component('ShortDataDifficulty', ShortDataDifficulty)




    import ShortDataAverageGasPrice from "@/components/NewHome/Sections/ShortData/ShortDataAverageGasPrice"
    Vue.component('ShortDataAverageGasPrice', ShortDataAverageGasPrice)

    import ShortDataAverageValueTransfered from "@/components/NewHome/Sections/ShortData/ShortDataAverageValueTransfered"
    Vue.component('ShortDataAverageValueTransfered', ShortDataAverageValueTransfered)

    import ShortDataViewingLastTransactions from "@/components/NewHome/Sections/ShortData/ShortDataViewingLastTransactions"
    Vue.component('ShortDataViewingLastTransactions', ShortDataViewingLastTransactions)

    import ShortDataTotalFees from "@/components/NewHome/Sections/ShortData/ShortDataTotalFees"
    Vue.component('ShortDataTotalFees', ShortDataTotalFees)





    /* Graphs ---------------------- */
    import VueChart from "@/components/NewHome/Sections/Graphs/VueChart"
    Vue.component('VueChart', VueChart)

    import GraphsRealChart from "@/components/NewHome/Sections/Graphs/GraphsRealChart"
    Vue.component('GraphsRealChart', GraphsRealChart)

    import GraphsBarChart from "@/components/NewHome/Sections/Graphs/GraphsBarChart"
    Vue.component('GraphsBarChart', GraphsBarChart)

    import GraphsLineChart from "@/components/NewHome/Sections/Graphs/GraphsLineChart"
    Vue.component('GraphsLineChart', GraphsLineChart)




    /* Tables ---------------------- */
    import TableTransactions from "@/components/NewHome/Sections/Tables/TableTransactions"
    Vue.component('TableTransactions', TableTransactions)

    import TablesLatestBlocks from "@/components/NewHome/Sections/Tables/TablesLatestBlocks"
    Vue.component('TablesLatestBlocks', TablesLatestBlocks)

    import TablesTop10Senders from "@/components/NewHome/Sections/Tables/TablesTop10Senders"
    Vue.component('TablesTop10Senders', TablesTop10Senders)




    /* Footers ---------------------- */
    import FootersBottom from "@/components/NewHome/Sections/Footers/FootersBottom"
    Vue.component('FootersBottom', FootersBottom)




    /* Info  ---------------------- */
    import InfoFAQ from "@/components/NewHome/Sections/Info/InfoFAQ"
    Vue.component('InfoFAQ', InfoFAQ)
    
    import InfoAbout from "@/components/NewHome/Sections/Info/InfoAbout"
    Vue.component('InfoAbout', InfoAbout)
    
    import InfoContact from "@/components/NewHome/Sections/Info/InfoContact"
    Vue.component('InfoContact', InfoContact)




    /* SinglePages  ---------------------- */
    import SinglePagesIndividualTransaction from "@/components/NewHome/Sections/SinglePages/SinglePagesIndividualTransaction"
    Vue.component('SinglePagesIndividualTransaction', SinglePagesIndividualTransaction)
    
    import SinglePagesBlock from "@/components/NewHome/Sections/SinglePages/SinglePagesBlock"
    Vue.component('SinglePagesBlock', SinglePagesBlock)
    
    import latestTransactions from "@/components/NewHome/Sections/SinglePages/latestTransactions"
    Vue.component('latestTransactions', latestTransactions)
    
    import LatestPendingTransactions from "@/components/NewHome/Sections/SinglePages/LatestPendingTransactions"
    Vue.component("LatestPendingTransactions", LatestPendingTransactions)
        


