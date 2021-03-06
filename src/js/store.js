import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,
    // ...
    state:{
        currentSteps:1,
        flow:{
            flowName:'',
            flowDescription:''
        },
        articleList:[],
        messageList:[]
    },
    getters:{
        getArticleListByType:(state)=>(type)=>{
            return state.articleList.filter((item)=>{
                if(item.articleType == type){
                    return item
                }
            })
        },
        getMessageListByTargetId:(state)=>(targetId)=>{
            return state.messageList.filter((item)=>{
                if(item.targetId === targetId){
                    return item
                }
            })
        }
    },
    mutations:{
        //修改流程名
        updateFlowName(state,flowName){
            state.flow.flowName = flowName
        },
        //修改流程描述
        UpdateFlowDescription(state,flowDescription){
            state.flow.flowDescription = flowDescription
        },
        //更新流程节点表
        updateFlowNodeList(state,flowNodeList){
            state.flowNodeList = flowNodeList
        },
        //更新职位列表
        updatePositionList(state,positionList){
            state.positionList = positionList
        },
        updateCurrentSteps(state,currentSteps){
            state.currentSteps = currentSteps
        },
        //更新文章列表
        updateArticleList(state,articleList){
            state.articleList = articleList
        },
        //更新消息列表
        updateMessageList(state,message){
            state.messageList.push(message)
        }
    }
})

export default store