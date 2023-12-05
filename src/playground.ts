type Agent = {
  name: string
  send: (message: string, recipient: "Agent", requestReply?: boolean) => Promise<void>
  receive: (message?: string, sender?: "Agent", request_reply?: boolean) => Promise<void>
  reset: () => void
  reply: (message?: string, sender?: "Agent") => Promise<void>
}

type Messages = any


export class Chat{
  private agents: Map<string, Agent> = new Map()
  private messages: Array<Messages> = []
  private max_rounds: number = 0
  private admin: Agent | null = null
  
  createAgent(name: string, opts?: any) {
    return {
      
    }
  }
  
  constructor() { }
  agent(name: string, opts?: any) {
    this.agents.set(name, opts)
  }
  userProxyAgent(name: string, opts?: any) {
    this.agents.set(name, opts)
  }
}

// const agent: Agent = {
//   name: "agent",
//   send: async (message: string, recipient: "Agent", requestReply?: boolean) => {
//     console.log("agent send", message)
//   },
//   receive: async (message?: string, sender?: "Agent", request_reply?: boolean) => {
//     console.log("agent receive", message)
//   },
//   reset: () => {
//     console.log("agent reset")
//   },
//   reply: async (message?: string, sender?: "Agent") => {
//     console.log("agent reply", message)
//   }
// }