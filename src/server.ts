import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { creatEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";

export const app = fastify()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);


app.register(creatEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)

app.listen({ port: 3333}).then(() => {
    console.log('HTTP server running!')
})

