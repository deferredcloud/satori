/**
 * @since 0.0.1
 */

import { Console, Effect } from "effect"

const program = Effect.gen(function*() {
  yield* Console.log("Hellope!")
})

Effect.runPromise(program)
