# Buffer Window Memory

BufferWindowMemory用于跟踪会话中的来回消息，然后使用大小为 `k` 的窗口将最近的 `k` 条来回消息提取出来作为内存。 

### back-and-forths in conversation

```typescript
import { OpenAI } from "langchain/llms/openai";

import { BufferWindowMemory } from "langchain/memory";

import { ConversationChain } from "langchain/chains";



const model = new OpenAI({});

const memory = new BufferWindowMemory({ k: 1 });

const chain = new ConversationChain({ llm: model, memory: memory });

const res1 = await chain.invoke({ input: "Hi! I'm Jim." });

console.log({ res1 });

```


```shell
{response: " Hi Jim! It's nice to meet you. My name is AI. What would you like to talk about?"}

```


```typescript
const res2 = await chain.invoke({ input: "What's my name?" });

console.log({ res2 });

```


```shell

{response: ' You said your name is Jim. Is there anything else you would like to talk about?'}

```

