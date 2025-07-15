
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Typo_emprendimiento
 * 
 */
export type Typo_emprendimiento = $Result.DefaultSelection<Prisma.$Typo_emprendimientoPayload>
/**
 * Model Productos
 * 
 */
export type Productos = $Result.DefaultSelection<Prisma.$ProductosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Typo_emprendimientos
 * const typo_emprendimientos = await prisma.typo_emprendimiento.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Typo_emprendimientos
   * const typo_emprendimientos = await prisma.typo_emprendimiento.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.typo_emprendimiento`: Exposes CRUD operations for the **Typo_emprendimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Typo_emprendimientos
    * const typo_emprendimientos = await prisma.typo_emprendimiento.findMany()
    * ```
    */
  get typo_emprendimiento(): Prisma.Typo_emprendimientoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **Productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.ProductosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Typo_emprendimiento: 'Typo_emprendimiento',
    Productos: 'Productos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "typo_emprendimiento" | "productos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Typo_emprendimiento: {
        payload: Prisma.$Typo_emprendimientoPayload<ExtArgs>
        fields: Prisma.Typo_emprendimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Typo_emprendimientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Typo_emprendimientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload>
          }
          findFirst: {
            args: Prisma.Typo_emprendimientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Typo_emprendimientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload>
          }
          findMany: {
            args: Prisma.Typo_emprendimientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload>[]
          }
          create: {
            args: Prisma.Typo_emprendimientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload>
          }
          createMany: {
            args: Prisma.Typo_emprendimientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Typo_emprendimientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload>[]
          }
          delete: {
            args: Prisma.Typo_emprendimientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload>
          }
          update: {
            args: Prisma.Typo_emprendimientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload>
          }
          deleteMany: {
            args: Prisma.Typo_emprendimientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Typo_emprendimientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Typo_emprendimientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload>[]
          }
          upsert: {
            args: Prisma.Typo_emprendimientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Typo_emprendimientoPayload>
          }
          aggregate: {
            args: Prisma.Typo_emprendimientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypo_emprendimiento>
          }
          groupBy: {
            args: Prisma.Typo_emprendimientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Typo_emprendimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Typo_emprendimientoCountArgs<ExtArgs>
            result: $Utils.Optional<Typo_emprendimientoCountAggregateOutputType> | number
          }
        }
      }
      Productos: {
        payload: Prisma.$ProductosPayload<ExtArgs>
        fields: Prisma.ProductosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          findFirst: {
            args: Prisma.ProductosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          findMany: {
            args: Prisma.ProductosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>[]
          }
          create: {
            args: Prisma.ProductosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          createMany: {
            args: Prisma.ProductosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>[]
          }
          delete: {
            args: Prisma.ProductosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          update: {
            args: Prisma.ProductosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          deleteMany: {
            args: Prisma.ProductosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>[]
          }
          upsert: {
            args: Prisma.ProductosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.ProductosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    typo_emprendimiento?: Typo_emprendimientoOmit
    productos?: ProductosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    typo_emprendimiento: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typo_emprendimiento?: boolean | ProductosCountOutputTypeCountTypo_emprendimientoArgs
  }

  // Custom InputTypes
  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountTypo_emprendimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Typo_emprendimientoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Typo_emprendimiento
   */

  export type AggregateTypo_emprendimiento = {
    _count: Typo_emprendimientoCountAggregateOutputType | null
    _min: Typo_emprendimientoMinAggregateOutputType | null
    _max: Typo_emprendimientoMaxAggregateOutputType | null
  }

  export type Typo_emprendimientoMinAggregateOutputType = {
    typo: string | null
    descripcion: string | null
    foto: string | null
    producto: string | null
  }

  export type Typo_emprendimientoMaxAggregateOutputType = {
    typo: string | null
    descripcion: string | null
    foto: string | null
    producto: string | null
  }

  export type Typo_emprendimientoCountAggregateOutputType = {
    typo: number
    descripcion: number
    foto: number
    producto: number
    _all: number
  }


  export type Typo_emprendimientoMinAggregateInputType = {
    typo?: true
    descripcion?: true
    foto?: true
    producto?: true
  }

  export type Typo_emprendimientoMaxAggregateInputType = {
    typo?: true
    descripcion?: true
    foto?: true
    producto?: true
  }

  export type Typo_emprendimientoCountAggregateInputType = {
    typo?: true
    descripcion?: true
    foto?: true
    producto?: true
    _all?: true
  }

  export type Typo_emprendimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Typo_emprendimiento to aggregate.
     */
    where?: Typo_emprendimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Typo_emprendimientos to fetch.
     */
    orderBy?: Typo_emprendimientoOrderByWithRelationInput | Typo_emprendimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Typo_emprendimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Typo_emprendimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Typo_emprendimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Typo_emprendimientos
    **/
    _count?: true | Typo_emprendimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Typo_emprendimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Typo_emprendimientoMaxAggregateInputType
  }

  export type GetTypo_emprendimientoAggregateType<T extends Typo_emprendimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateTypo_emprendimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypo_emprendimiento[P]>
      : GetScalarType<T[P], AggregateTypo_emprendimiento[P]>
  }




  export type Typo_emprendimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Typo_emprendimientoWhereInput
    orderBy?: Typo_emprendimientoOrderByWithAggregationInput | Typo_emprendimientoOrderByWithAggregationInput[]
    by: Typo_emprendimientoScalarFieldEnum[] | Typo_emprendimientoScalarFieldEnum
    having?: Typo_emprendimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Typo_emprendimientoCountAggregateInputType | true
    _min?: Typo_emprendimientoMinAggregateInputType
    _max?: Typo_emprendimientoMaxAggregateInputType
  }

  export type Typo_emprendimientoGroupByOutputType = {
    typo: string
    descripcion: string
    foto: string | null
    producto: string
    _count: Typo_emprendimientoCountAggregateOutputType | null
    _min: Typo_emprendimientoMinAggregateOutputType | null
    _max: Typo_emprendimientoMaxAggregateOutputType | null
  }

  type GetTypo_emprendimientoGroupByPayload<T extends Typo_emprendimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Typo_emprendimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Typo_emprendimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Typo_emprendimientoGroupByOutputType[P]>
            : GetScalarType<T[P], Typo_emprendimientoGroupByOutputType[P]>
        }
      >
    >


  export type Typo_emprendimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    typo?: boolean
    descripcion?: boolean
    foto?: boolean
    producto?: boolean
    rela_typo_prod?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typo_emprendimiento"]>

  export type Typo_emprendimientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    typo?: boolean
    descripcion?: boolean
    foto?: boolean
    producto?: boolean
    rela_typo_prod?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typo_emprendimiento"]>

  export type Typo_emprendimientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    typo?: boolean
    descripcion?: boolean
    foto?: boolean
    producto?: boolean
    rela_typo_prod?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typo_emprendimiento"]>

  export type Typo_emprendimientoSelectScalar = {
    typo?: boolean
    descripcion?: boolean
    foto?: boolean
    producto?: boolean
  }

  export type Typo_emprendimientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"typo" | "descripcion" | "foto" | "producto", ExtArgs["result"]["typo_emprendimiento"]>
  export type Typo_emprendimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_typo_prod?: boolean | ProductosDefaultArgs<ExtArgs>
  }
  export type Typo_emprendimientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_typo_prod?: boolean | ProductosDefaultArgs<ExtArgs>
  }
  export type Typo_emprendimientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_typo_prod?: boolean | ProductosDefaultArgs<ExtArgs>
  }

  export type $Typo_emprendimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Typo_emprendimiento"
    objects: {
      rela_typo_prod: Prisma.$ProductosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      typo: string
      descripcion: string
      foto: string | null
      producto: string
    }, ExtArgs["result"]["typo_emprendimiento"]>
    composites: {}
  }

  type Typo_emprendimientoGetPayload<S extends boolean | null | undefined | Typo_emprendimientoDefaultArgs> = $Result.GetResult<Prisma.$Typo_emprendimientoPayload, S>

  type Typo_emprendimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Typo_emprendimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Typo_emprendimientoCountAggregateInputType | true
    }

  export interface Typo_emprendimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Typo_emprendimiento'], meta: { name: 'Typo_emprendimiento' } }
    /**
     * Find zero or one Typo_emprendimiento that matches the filter.
     * @param {Typo_emprendimientoFindUniqueArgs} args - Arguments to find a Typo_emprendimiento
     * @example
     * // Get one Typo_emprendimiento
     * const typo_emprendimiento = await prisma.typo_emprendimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Typo_emprendimientoFindUniqueArgs>(args: SelectSubset<T, Typo_emprendimientoFindUniqueArgs<ExtArgs>>): Prisma__Typo_emprendimientoClient<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Typo_emprendimiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Typo_emprendimientoFindUniqueOrThrowArgs} args - Arguments to find a Typo_emprendimiento
     * @example
     * // Get one Typo_emprendimiento
     * const typo_emprendimiento = await prisma.typo_emprendimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Typo_emprendimientoFindUniqueOrThrowArgs>(args: SelectSubset<T, Typo_emprendimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Typo_emprendimientoClient<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Typo_emprendimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Typo_emprendimientoFindFirstArgs} args - Arguments to find a Typo_emprendimiento
     * @example
     * // Get one Typo_emprendimiento
     * const typo_emprendimiento = await prisma.typo_emprendimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Typo_emprendimientoFindFirstArgs>(args?: SelectSubset<T, Typo_emprendimientoFindFirstArgs<ExtArgs>>): Prisma__Typo_emprendimientoClient<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Typo_emprendimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Typo_emprendimientoFindFirstOrThrowArgs} args - Arguments to find a Typo_emprendimiento
     * @example
     * // Get one Typo_emprendimiento
     * const typo_emprendimiento = await prisma.typo_emprendimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Typo_emprendimientoFindFirstOrThrowArgs>(args?: SelectSubset<T, Typo_emprendimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Typo_emprendimientoClient<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Typo_emprendimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Typo_emprendimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Typo_emprendimientos
     * const typo_emprendimientos = await prisma.typo_emprendimiento.findMany()
     * 
     * // Get first 10 Typo_emprendimientos
     * const typo_emprendimientos = await prisma.typo_emprendimiento.findMany({ take: 10 })
     * 
     * // Only select the `typo`
     * const typo_emprendimientoWithTypoOnly = await prisma.typo_emprendimiento.findMany({ select: { typo: true } })
     * 
     */
    findMany<T extends Typo_emprendimientoFindManyArgs>(args?: SelectSubset<T, Typo_emprendimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Typo_emprendimiento.
     * @param {Typo_emprendimientoCreateArgs} args - Arguments to create a Typo_emprendimiento.
     * @example
     * // Create one Typo_emprendimiento
     * const Typo_emprendimiento = await prisma.typo_emprendimiento.create({
     *   data: {
     *     // ... data to create a Typo_emprendimiento
     *   }
     * })
     * 
     */
    create<T extends Typo_emprendimientoCreateArgs>(args: SelectSubset<T, Typo_emprendimientoCreateArgs<ExtArgs>>): Prisma__Typo_emprendimientoClient<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Typo_emprendimientos.
     * @param {Typo_emprendimientoCreateManyArgs} args - Arguments to create many Typo_emprendimientos.
     * @example
     * // Create many Typo_emprendimientos
     * const typo_emprendimiento = await prisma.typo_emprendimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Typo_emprendimientoCreateManyArgs>(args?: SelectSubset<T, Typo_emprendimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Typo_emprendimientos and returns the data saved in the database.
     * @param {Typo_emprendimientoCreateManyAndReturnArgs} args - Arguments to create many Typo_emprendimientos.
     * @example
     * // Create many Typo_emprendimientos
     * const typo_emprendimiento = await prisma.typo_emprendimiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Typo_emprendimientos and only return the `typo`
     * const typo_emprendimientoWithTypoOnly = await prisma.typo_emprendimiento.createManyAndReturn({
     *   select: { typo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Typo_emprendimientoCreateManyAndReturnArgs>(args?: SelectSubset<T, Typo_emprendimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Typo_emprendimiento.
     * @param {Typo_emprendimientoDeleteArgs} args - Arguments to delete one Typo_emprendimiento.
     * @example
     * // Delete one Typo_emprendimiento
     * const Typo_emprendimiento = await prisma.typo_emprendimiento.delete({
     *   where: {
     *     // ... filter to delete one Typo_emprendimiento
     *   }
     * })
     * 
     */
    delete<T extends Typo_emprendimientoDeleteArgs>(args: SelectSubset<T, Typo_emprendimientoDeleteArgs<ExtArgs>>): Prisma__Typo_emprendimientoClient<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Typo_emprendimiento.
     * @param {Typo_emprendimientoUpdateArgs} args - Arguments to update one Typo_emprendimiento.
     * @example
     * // Update one Typo_emprendimiento
     * const typo_emprendimiento = await prisma.typo_emprendimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Typo_emprendimientoUpdateArgs>(args: SelectSubset<T, Typo_emprendimientoUpdateArgs<ExtArgs>>): Prisma__Typo_emprendimientoClient<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Typo_emprendimientos.
     * @param {Typo_emprendimientoDeleteManyArgs} args - Arguments to filter Typo_emprendimientos to delete.
     * @example
     * // Delete a few Typo_emprendimientos
     * const { count } = await prisma.typo_emprendimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Typo_emprendimientoDeleteManyArgs>(args?: SelectSubset<T, Typo_emprendimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Typo_emprendimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Typo_emprendimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Typo_emprendimientos
     * const typo_emprendimiento = await prisma.typo_emprendimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Typo_emprendimientoUpdateManyArgs>(args: SelectSubset<T, Typo_emprendimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Typo_emprendimientos and returns the data updated in the database.
     * @param {Typo_emprendimientoUpdateManyAndReturnArgs} args - Arguments to update many Typo_emprendimientos.
     * @example
     * // Update many Typo_emprendimientos
     * const typo_emprendimiento = await prisma.typo_emprendimiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Typo_emprendimientos and only return the `typo`
     * const typo_emprendimientoWithTypoOnly = await prisma.typo_emprendimiento.updateManyAndReturn({
     *   select: { typo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Typo_emprendimientoUpdateManyAndReturnArgs>(args: SelectSubset<T, Typo_emprendimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Typo_emprendimiento.
     * @param {Typo_emprendimientoUpsertArgs} args - Arguments to update or create a Typo_emprendimiento.
     * @example
     * // Update or create a Typo_emprendimiento
     * const typo_emprendimiento = await prisma.typo_emprendimiento.upsert({
     *   create: {
     *     // ... data to create a Typo_emprendimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Typo_emprendimiento we want to update
     *   }
     * })
     */
    upsert<T extends Typo_emprendimientoUpsertArgs>(args: SelectSubset<T, Typo_emprendimientoUpsertArgs<ExtArgs>>): Prisma__Typo_emprendimientoClient<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Typo_emprendimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Typo_emprendimientoCountArgs} args - Arguments to filter Typo_emprendimientos to count.
     * @example
     * // Count the number of Typo_emprendimientos
     * const count = await prisma.typo_emprendimiento.count({
     *   where: {
     *     // ... the filter for the Typo_emprendimientos we want to count
     *   }
     * })
    **/
    count<T extends Typo_emprendimientoCountArgs>(
      args?: Subset<T, Typo_emprendimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Typo_emprendimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Typo_emprendimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Typo_emprendimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Typo_emprendimientoAggregateArgs>(args: Subset<T, Typo_emprendimientoAggregateArgs>): Prisma.PrismaPromise<GetTypo_emprendimientoAggregateType<T>>

    /**
     * Group by Typo_emprendimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Typo_emprendimientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Typo_emprendimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Typo_emprendimientoGroupByArgs['orderBy'] }
        : { orderBy?: Typo_emprendimientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Typo_emprendimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypo_emprendimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Typo_emprendimiento model
   */
  readonly fields: Typo_emprendimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Typo_emprendimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Typo_emprendimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rela_typo_prod<T extends ProductosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductosDefaultArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Typo_emprendimiento model
   */
  interface Typo_emprendimientoFieldRefs {
    readonly typo: FieldRef<"Typo_emprendimiento", 'String'>
    readonly descripcion: FieldRef<"Typo_emprendimiento", 'String'>
    readonly foto: FieldRef<"Typo_emprendimiento", 'String'>
    readonly producto: FieldRef<"Typo_emprendimiento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Typo_emprendimiento findUnique
   */
  export type Typo_emprendimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
    /**
     * Filter, which Typo_emprendimiento to fetch.
     */
    where: Typo_emprendimientoWhereUniqueInput
  }

  /**
   * Typo_emprendimiento findUniqueOrThrow
   */
  export type Typo_emprendimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
    /**
     * Filter, which Typo_emprendimiento to fetch.
     */
    where: Typo_emprendimientoWhereUniqueInput
  }

  /**
   * Typo_emprendimiento findFirst
   */
  export type Typo_emprendimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
    /**
     * Filter, which Typo_emprendimiento to fetch.
     */
    where?: Typo_emprendimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Typo_emprendimientos to fetch.
     */
    orderBy?: Typo_emprendimientoOrderByWithRelationInput | Typo_emprendimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Typo_emprendimientos.
     */
    cursor?: Typo_emprendimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Typo_emprendimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Typo_emprendimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Typo_emprendimientos.
     */
    distinct?: Typo_emprendimientoScalarFieldEnum | Typo_emprendimientoScalarFieldEnum[]
  }

  /**
   * Typo_emprendimiento findFirstOrThrow
   */
  export type Typo_emprendimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
    /**
     * Filter, which Typo_emprendimiento to fetch.
     */
    where?: Typo_emprendimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Typo_emprendimientos to fetch.
     */
    orderBy?: Typo_emprendimientoOrderByWithRelationInput | Typo_emprendimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Typo_emprendimientos.
     */
    cursor?: Typo_emprendimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Typo_emprendimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Typo_emprendimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Typo_emprendimientos.
     */
    distinct?: Typo_emprendimientoScalarFieldEnum | Typo_emprendimientoScalarFieldEnum[]
  }

  /**
   * Typo_emprendimiento findMany
   */
  export type Typo_emprendimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
    /**
     * Filter, which Typo_emprendimientos to fetch.
     */
    where?: Typo_emprendimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Typo_emprendimientos to fetch.
     */
    orderBy?: Typo_emprendimientoOrderByWithRelationInput | Typo_emprendimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Typo_emprendimientos.
     */
    cursor?: Typo_emprendimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Typo_emprendimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Typo_emprendimientos.
     */
    skip?: number
    distinct?: Typo_emprendimientoScalarFieldEnum | Typo_emprendimientoScalarFieldEnum[]
  }

  /**
   * Typo_emprendimiento create
   */
  export type Typo_emprendimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Typo_emprendimiento.
     */
    data: XOR<Typo_emprendimientoCreateInput, Typo_emprendimientoUncheckedCreateInput>
  }

  /**
   * Typo_emprendimiento createMany
   */
  export type Typo_emprendimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Typo_emprendimientos.
     */
    data: Typo_emprendimientoCreateManyInput | Typo_emprendimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Typo_emprendimiento createManyAndReturn
   */
  export type Typo_emprendimientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * The data used to create many Typo_emprendimientos.
     */
    data: Typo_emprendimientoCreateManyInput | Typo_emprendimientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Typo_emprendimiento update
   */
  export type Typo_emprendimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Typo_emprendimiento.
     */
    data: XOR<Typo_emprendimientoUpdateInput, Typo_emprendimientoUncheckedUpdateInput>
    /**
     * Choose, which Typo_emprendimiento to update.
     */
    where: Typo_emprendimientoWhereUniqueInput
  }

  /**
   * Typo_emprendimiento updateMany
   */
  export type Typo_emprendimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Typo_emprendimientos.
     */
    data: XOR<Typo_emprendimientoUpdateManyMutationInput, Typo_emprendimientoUncheckedUpdateManyInput>
    /**
     * Filter which Typo_emprendimientos to update
     */
    where?: Typo_emprendimientoWhereInput
    /**
     * Limit how many Typo_emprendimientos to update.
     */
    limit?: number
  }

  /**
   * Typo_emprendimiento updateManyAndReturn
   */
  export type Typo_emprendimientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * The data used to update Typo_emprendimientos.
     */
    data: XOR<Typo_emprendimientoUpdateManyMutationInput, Typo_emprendimientoUncheckedUpdateManyInput>
    /**
     * Filter which Typo_emprendimientos to update
     */
    where?: Typo_emprendimientoWhereInput
    /**
     * Limit how many Typo_emprendimientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Typo_emprendimiento upsert
   */
  export type Typo_emprendimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Typo_emprendimiento to update in case it exists.
     */
    where: Typo_emprendimientoWhereUniqueInput
    /**
     * In case the Typo_emprendimiento found by the `where` argument doesn't exist, create a new Typo_emprendimiento with this data.
     */
    create: XOR<Typo_emprendimientoCreateInput, Typo_emprendimientoUncheckedCreateInput>
    /**
     * In case the Typo_emprendimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Typo_emprendimientoUpdateInput, Typo_emprendimientoUncheckedUpdateInput>
  }

  /**
   * Typo_emprendimiento delete
   */
  export type Typo_emprendimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
    /**
     * Filter which Typo_emprendimiento to delete.
     */
    where: Typo_emprendimientoWhereUniqueInput
  }

  /**
   * Typo_emprendimiento deleteMany
   */
  export type Typo_emprendimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Typo_emprendimientos to delete
     */
    where?: Typo_emprendimientoWhereInput
    /**
     * Limit how many Typo_emprendimientos to delete.
     */
    limit?: number
  }

  /**
   * Typo_emprendimiento without action
   */
  export type Typo_emprendimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
  }


  /**
   * Model Productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosMinAggregateOutputType = {
    nombre: string | null
    descripcion: string | null
    pasos: string | null
    herramientas: string | null
    foto: string | null
  }

  export type ProductosMaxAggregateOutputType = {
    nombre: string | null
    descripcion: string | null
    pasos: string | null
    herramientas: string | null
    foto: string | null
  }

  export type ProductosCountAggregateOutputType = {
    nombre: number
    descripcion: number
    pasos: number
    herramientas: number
    foto: number
    _all: number
  }


  export type ProductosMinAggregateInputType = {
    nombre?: true
    descripcion?: true
    pasos?: true
    herramientas?: true
    foto?: true
  }

  export type ProductosMaxAggregateInputType = {
    nombre?: true
    descripcion?: true
    pasos?: true
    herramientas?: true
    foto?: true
  }

  export type ProductosCountAggregateInputType = {
    nombre?: true
    descripcion?: true
    pasos?: true
    herramientas?: true
    foto?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to aggregate.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type ProductosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductosWhereInput
    orderBy?: ProductosOrderByWithAggregationInput | ProductosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: ProductosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto: string | null
    _count: ProductosCountAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends ProductosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type ProductosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    descripcion?: boolean
    pasos?: boolean
    herramientas?: boolean
    foto?: boolean
    typo_emprendimiento?: boolean | Productos$typo_emprendimientoArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    descripcion?: boolean
    pasos?: boolean
    herramientas?: boolean
    foto?: boolean
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    descripcion?: boolean
    pasos?: boolean
    herramientas?: boolean
    foto?: boolean
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectScalar = {
    nombre?: boolean
    descripcion?: boolean
    pasos?: boolean
    herramientas?: boolean
    foto?: boolean
  }

  export type ProductosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nombre" | "descripcion" | "pasos" | "herramientas" | "foto", ExtArgs["result"]["productos"]>
  export type ProductosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typo_emprendimiento?: boolean | Productos$typo_emprendimientoArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Productos"
    objects: {
      typo_emprendimiento: Prisma.$Typo_emprendimientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nombre: string
      descripcion: string
      pasos: string
      herramientas: string
      foto: string | null
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type ProductosGetPayload<S extends boolean | null | undefined | ProductosDefaultArgs> = $Result.GetResult<Prisma.$ProductosPayload, S>

  type ProductosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface ProductosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Productos'], meta: { name: 'Productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {ProductosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductosFindUniqueArgs>(args: SelectSubset<T, ProductosFindUniqueArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductosFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductosFindFirstArgs>(args?: SelectSubset<T, ProductosFindFirstArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductosFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `nombre`
     * const productosWithNombreOnly = await prisma.productos.findMany({ select: { nombre: true } })
     * 
     */
    findMany<T extends ProductosFindManyArgs>(args?: SelectSubset<T, ProductosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos.
     * @param {ProductosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends ProductosCreateArgs>(args: SelectSubset<T, ProductosCreateArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductosCreateManyArgs>(args?: SelectSubset<T, ProductosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductosCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `nombre`
     * const productosWithNombreOnly = await prisma.productos.createManyAndReturn({
     *   select: { nombre: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductosCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productos.
     * @param {ProductosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends ProductosDeleteArgs>(args: SelectSubset<T, ProductosDeleteArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos.
     * @param {ProductosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductosUpdateArgs>(args: SelectSubset<T, ProductosUpdateArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductosDeleteManyArgs>(args?: SelectSubset<T, ProductosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductosUpdateManyArgs>(args: SelectSubset<T, ProductosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductosUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `nombre`
     * const productosWithNombreOnly = await prisma.productos.updateManyAndReturn({
     *   select: { nombre: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductosUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productos.
     * @param {ProductosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends ProductosUpsertArgs>(args: SelectSubset<T, ProductosUpsertArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductosCountArgs>(
      args?: Subset<T, ProductosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductosGroupByArgs['orderBy'] }
        : { orderBy?: ProductosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Productos model
   */
  readonly fields: ProductosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    typo_emprendimiento<T extends Productos$typo_emprendimientoArgs<ExtArgs> = {}>(args?: Subset<T, Productos$typo_emprendimientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Productos model
   */
  interface ProductosFieldRefs {
    readonly nombre: FieldRef<"Productos", 'String'>
    readonly descripcion: FieldRef<"Productos", 'String'>
    readonly pasos: FieldRef<"Productos", 'String'>
    readonly herramientas: FieldRef<"Productos", 'String'>
    readonly foto: FieldRef<"Productos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Productos findUnique
   */
  export type ProductosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos findUniqueOrThrow
   */
  export type ProductosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos findFirst
   */
  export type ProductosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos findFirstOrThrow
   */
  export type ProductosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos findMany
   */
  export type ProductosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos create
   */
  export type ProductosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The data needed to create a Productos.
     */
    data: XOR<ProductosCreateInput, ProductosUncheckedCreateInput>
  }

  /**
   * Productos createMany
   */
  export type ProductosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductosCreateManyInput | ProductosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Productos createManyAndReturn
   */
  export type ProductosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductosCreateManyInput | ProductosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Productos update
   */
  export type ProductosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The data needed to update a Productos.
     */
    data: XOR<ProductosUpdateInput, ProductosUncheckedUpdateInput>
    /**
     * Choose, which Productos to update.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos updateMany
   */
  export type ProductosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductosUpdateManyMutationInput, ProductosUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Productos updateManyAndReturn
   */
  export type ProductosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductosUpdateManyMutationInput, ProductosUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Productos upsert
   */
  export type ProductosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The filter to search for the Productos to update in case it exists.
     */
    where: ProductosWhereUniqueInput
    /**
     * In case the Productos found by the `where` argument doesn't exist, create a new Productos with this data.
     */
    create: XOR<ProductosCreateInput, ProductosUncheckedCreateInput>
    /**
     * In case the Productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductosUpdateInput, ProductosUncheckedUpdateInput>
  }

  /**
   * Productos delete
   */
  export type ProductosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter which Productos to delete.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos deleteMany
   */
  export type ProductosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Productos.typo_emprendimiento
   */
  export type Productos$typo_emprendimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimiento
     */
    select?: Typo_emprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Typo_emprendimiento
     */
    omit?: Typo_emprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Typo_emprendimientoInclude<ExtArgs> | null
    where?: Typo_emprendimientoWhereInput
    orderBy?: Typo_emprendimientoOrderByWithRelationInput | Typo_emprendimientoOrderByWithRelationInput[]
    cursor?: Typo_emprendimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Typo_emprendimientoScalarFieldEnum | Typo_emprendimientoScalarFieldEnum[]
  }

  /**
   * Productos without action
   */
  export type ProductosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Typo_emprendimientoScalarFieldEnum: {
    typo: 'typo',
    descripcion: 'descripcion',
    foto: 'foto',
    producto: 'producto'
  };

  export type Typo_emprendimientoScalarFieldEnum = (typeof Typo_emprendimientoScalarFieldEnum)[keyof typeof Typo_emprendimientoScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    pasos: 'pasos',
    herramientas: 'herramientas',
    foto: 'foto'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type Typo_emprendimientoWhereInput = {
    AND?: Typo_emprendimientoWhereInput | Typo_emprendimientoWhereInput[]
    OR?: Typo_emprendimientoWhereInput[]
    NOT?: Typo_emprendimientoWhereInput | Typo_emprendimientoWhereInput[]
    typo?: StringFilter<"Typo_emprendimiento"> | string
    descripcion?: StringFilter<"Typo_emprendimiento"> | string
    foto?: StringNullableFilter<"Typo_emprendimiento"> | string | null
    producto?: StringFilter<"Typo_emprendimiento"> | string
    rela_typo_prod?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
  }

  export type Typo_emprendimientoOrderByWithRelationInput = {
    typo?: SortOrder
    descripcion?: SortOrder
    foto?: SortOrderInput | SortOrder
    producto?: SortOrder
    rela_typo_prod?: ProductosOrderByWithRelationInput
  }

  export type Typo_emprendimientoWhereUniqueInput = Prisma.AtLeast<{
    typo?: string
    AND?: Typo_emprendimientoWhereInput | Typo_emprendimientoWhereInput[]
    OR?: Typo_emprendimientoWhereInput[]
    NOT?: Typo_emprendimientoWhereInput | Typo_emprendimientoWhereInput[]
    descripcion?: StringFilter<"Typo_emprendimiento"> | string
    foto?: StringNullableFilter<"Typo_emprendimiento"> | string | null
    producto?: StringFilter<"Typo_emprendimiento"> | string
    rela_typo_prod?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
  }, "typo">

  export type Typo_emprendimientoOrderByWithAggregationInput = {
    typo?: SortOrder
    descripcion?: SortOrder
    foto?: SortOrderInput | SortOrder
    producto?: SortOrder
    _count?: Typo_emprendimientoCountOrderByAggregateInput
    _max?: Typo_emprendimientoMaxOrderByAggregateInput
    _min?: Typo_emprendimientoMinOrderByAggregateInput
  }

  export type Typo_emprendimientoScalarWhereWithAggregatesInput = {
    AND?: Typo_emprendimientoScalarWhereWithAggregatesInput | Typo_emprendimientoScalarWhereWithAggregatesInput[]
    OR?: Typo_emprendimientoScalarWhereWithAggregatesInput[]
    NOT?: Typo_emprendimientoScalarWhereWithAggregatesInput | Typo_emprendimientoScalarWhereWithAggregatesInput[]
    typo?: StringWithAggregatesFilter<"Typo_emprendimiento"> | string
    descripcion?: StringWithAggregatesFilter<"Typo_emprendimiento"> | string
    foto?: StringNullableWithAggregatesFilter<"Typo_emprendimiento"> | string | null
    producto?: StringWithAggregatesFilter<"Typo_emprendimiento"> | string
  }

  export type ProductosWhereInput = {
    AND?: ProductosWhereInput | ProductosWhereInput[]
    OR?: ProductosWhereInput[]
    NOT?: ProductosWhereInput | ProductosWhereInput[]
    nombre?: StringFilter<"Productos"> | string
    descripcion?: StringFilter<"Productos"> | string
    pasos?: StringFilter<"Productos"> | string
    herramientas?: StringFilter<"Productos"> | string
    foto?: StringNullableFilter<"Productos"> | string | null
    typo_emprendimiento?: Typo_emprendimientoListRelationFilter
  }

  export type ProductosOrderByWithRelationInput = {
    nombre?: SortOrder
    descripcion?: SortOrder
    pasos?: SortOrder
    herramientas?: SortOrder
    foto?: SortOrderInput | SortOrder
    typo_emprendimiento?: Typo_emprendimientoOrderByRelationAggregateInput
  }

  export type ProductosWhereUniqueInput = Prisma.AtLeast<{
    nombre?: string
    AND?: ProductosWhereInput | ProductosWhereInput[]
    OR?: ProductosWhereInput[]
    NOT?: ProductosWhereInput | ProductosWhereInput[]
    descripcion?: StringFilter<"Productos"> | string
    pasos?: StringFilter<"Productos"> | string
    herramientas?: StringFilter<"Productos"> | string
    foto?: StringNullableFilter<"Productos"> | string | null
    typo_emprendimiento?: Typo_emprendimientoListRelationFilter
  }, "nombre">

  export type ProductosOrderByWithAggregationInput = {
    nombre?: SortOrder
    descripcion?: SortOrder
    pasos?: SortOrder
    herramientas?: SortOrder
    foto?: SortOrderInput | SortOrder
    _count?: ProductosCountOrderByAggregateInput
    _max?: ProductosMaxOrderByAggregateInput
    _min?: ProductosMinOrderByAggregateInput
  }

  export type ProductosScalarWhereWithAggregatesInput = {
    AND?: ProductosScalarWhereWithAggregatesInput | ProductosScalarWhereWithAggregatesInput[]
    OR?: ProductosScalarWhereWithAggregatesInput[]
    NOT?: ProductosScalarWhereWithAggregatesInput | ProductosScalarWhereWithAggregatesInput[]
    nombre?: StringWithAggregatesFilter<"Productos"> | string
    descripcion?: StringWithAggregatesFilter<"Productos"> | string
    pasos?: StringWithAggregatesFilter<"Productos"> | string
    herramientas?: StringWithAggregatesFilter<"Productos"> | string
    foto?: StringNullableWithAggregatesFilter<"Productos"> | string | null
  }

  export type Typo_emprendimientoCreateInput = {
    typo: string
    descripcion: string
    foto?: string | null
    rela_typo_prod: ProductosCreateNestedOneWithoutTypo_emprendimientoInput
  }

  export type Typo_emprendimientoUncheckedCreateInput = {
    typo: string
    descripcion: string
    foto?: string | null
    producto: string
  }

  export type Typo_emprendimientoUpdateInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    rela_typo_prod?: ProductosUpdateOneRequiredWithoutTypo_emprendimientoNestedInput
  }

  export type Typo_emprendimientoUncheckedUpdateInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    producto?: StringFieldUpdateOperationsInput | string
  }

  export type Typo_emprendimientoCreateManyInput = {
    typo: string
    descripcion: string
    foto?: string | null
    producto: string
  }

  export type Typo_emprendimientoUpdateManyMutationInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Typo_emprendimientoUncheckedUpdateManyInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    producto?: StringFieldUpdateOperationsInput | string
  }

  export type ProductosCreateInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    typo_emprendimiento?: Typo_emprendimientoCreateNestedManyWithoutRela_typo_prodInput
  }

  export type ProductosUncheckedCreateInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    typo_emprendimiento?: Typo_emprendimientoUncheckedCreateNestedManyWithoutRela_typo_prodInput
  }

  export type ProductosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    typo_emprendimiento?: Typo_emprendimientoUpdateManyWithoutRela_typo_prodNestedInput
  }

  export type ProductosUncheckedUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    typo_emprendimiento?: Typo_emprendimientoUncheckedUpdateManyWithoutRela_typo_prodNestedInput
  }

  export type ProductosCreateManyInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
  }

  export type ProductosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductosUncheckedUpdateManyInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProductosScalarRelationFilter = {
    is?: ProductosWhereInput
    isNot?: ProductosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Typo_emprendimientoCountOrderByAggregateInput = {
    typo?: SortOrder
    descripcion?: SortOrder
    foto?: SortOrder
    producto?: SortOrder
  }

  export type Typo_emprendimientoMaxOrderByAggregateInput = {
    typo?: SortOrder
    descripcion?: SortOrder
    foto?: SortOrder
    producto?: SortOrder
  }

  export type Typo_emprendimientoMinOrderByAggregateInput = {
    typo?: SortOrder
    descripcion?: SortOrder
    foto?: SortOrder
    producto?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Typo_emprendimientoListRelationFilter = {
    every?: Typo_emprendimientoWhereInput
    some?: Typo_emprendimientoWhereInput
    none?: Typo_emprendimientoWhereInput
  }

  export type Typo_emprendimientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductosCountOrderByAggregateInput = {
    nombre?: SortOrder
    descripcion?: SortOrder
    pasos?: SortOrder
    herramientas?: SortOrder
    foto?: SortOrder
  }

  export type ProductosMaxOrderByAggregateInput = {
    nombre?: SortOrder
    descripcion?: SortOrder
    pasos?: SortOrder
    herramientas?: SortOrder
    foto?: SortOrder
  }

  export type ProductosMinOrderByAggregateInput = {
    nombre?: SortOrder
    descripcion?: SortOrder
    pasos?: SortOrder
    herramientas?: SortOrder
    foto?: SortOrder
  }

  export type ProductosCreateNestedOneWithoutTypo_emprendimientoInput = {
    create?: XOR<ProductosCreateWithoutTypo_emprendimientoInput, ProductosUncheckedCreateWithoutTypo_emprendimientoInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutTypo_emprendimientoInput
    connect?: ProductosWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductosUpdateOneRequiredWithoutTypo_emprendimientoNestedInput = {
    create?: XOR<ProductosCreateWithoutTypo_emprendimientoInput, ProductosUncheckedCreateWithoutTypo_emprendimientoInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutTypo_emprendimientoInput
    upsert?: ProductosUpsertWithoutTypo_emprendimientoInput
    connect?: ProductosWhereUniqueInput
    update?: XOR<XOR<ProductosUpdateToOneWithWhereWithoutTypo_emprendimientoInput, ProductosUpdateWithoutTypo_emprendimientoInput>, ProductosUncheckedUpdateWithoutTypo_emprendimientoInput>
  }

  export type Typo_emprendimientoCreateNestedManyWithoutRela_typo_prodInput = {
    create?: XOR<Typo_emprendimientoCreateWithoutRela_typo_prodInput, Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput> | Typo_emprendimientoCreateWithoutRela_typo_prodInput[] | Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput[]
    connectOrCreate?: Typo_emprendimientoCreateOrConnectWithoutRela_typo_prodInput | Typo_emprendimientoCreateOrConnectWithoutRela_typo_prodInput[]
    createMany?: Typo_emprendimientoCreateManyRela_typo_prodInputEnvelope
    connect?: Typo_emprendimientoWhereUniqueInput | Typo_emprendimientoWhereUniqueInput[]
  }

  export type Typo_emprendimientoUncheckedCreateNestedManyWithoutRela_typo_prodInput = {
    create?: XOR<Typo_emprendimientoCreateWithoutRela_typo_prodInput, Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput> | Typo_emprendimientoCreateWithoutRela_typo_prodInput[] | Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput[]
    connectOrCreate?: Typo_emprendimientoCreateOrConnectWithoutRela_typo_prodInput | Typo_emprendimientoCreateOrConnectWithoutRela_typo_prodInput[]
    createMany?: Typo_emprendimientoCreateManyRela_typo_prodInputEnvelope
    connect?: Typo_emprendimientoWhereUniqueInput | Typo_emprendimientoWhereUniqueInput[]
  }

  export type Typo_emprendimientoUpdateManyWithoutRela_typo_prodNestedInput = {
    create?: XOR<Typo_emprendimientoCreateWithoutRela_typo_prodInput, Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput> | Typo_emprendimientoCreateWithoutRela_typo_prodInput[] | Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput[]
    connectOrCreate?: Typo_emprendimientoCreateOrConnectWithoutRela_typo_prodInput | Typo_emprendimientoCreateOrConnectWithoutRela_typo_prodInput[]
    upsert?: Typo_emprendimientoUpsertWithWhereUniqueWithoutRela_typo_prodInput | Typo_emprendimientoUpsertWithWhereUniqueWithoutRela_typo_prodInput[]
    createMany?: Typo_emprendimientoCreateManyRela_typo_prodInputEnvelope
    set?: Typo_emprendimientoWhereUniqueInput | Typo_emprendimientoWhereUniqueInput[]
    disconnect?: Typo_emprendimientoWhereUniqueInput | Typo_emprendimientoWhereUniqueInput[]
    delete?: Typo_emprendimientoWhereUniqueInput | Typo_emprendimientoWhereUniqueInput[]
    connect?: Typo_emprendimientoWhereUniqueInput | Typo_emprendimientoWhereUniqueInput[]
    update?: Typo_emprendimientoUpdateWithWhereUniqueWithoutRela_typo_prodInput | Typo_emprendimientoUpdateWithWhereUniqueWithoutRela_typo_prodInput[]
    updateMany?: Typo_emprendimientoUpdateManyWithWhereWithoutRela_typo_prodInput | Typo_emprendimientoUpdateManyWithWhereWithoutRela_typo_prodInput[]
    deleteMany?: Typo_emprendimientoScalarWhereInput | Typo_emprendimientoScalarWhereInput[]
  }

  export type Typo_emprendimientoUncheckedUpdateManyWithoutRela_typo_prodNestedInput = {
    create?: XOR<Typo_emprendimientoCreateWithoutRela_typo_prodInput, Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput> | Typo_emprendimientoCreateWithoutRela_typo_prodInput[] | Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput[]
    connectOrCreate?: Typo_emprendimientoCreateOrConnectWithoutRela_typo_prodInput | Typo_emprendimientoCreateOrConnectWithoutRela_typo_prodInput[]
    upsert?: Typo_emprendimientoUpsertWithWhereUniqueWithoutRela_typo_prodInput | Typo_emprendimientoUpsertWithWhereUniqueWithoutRela_typo_prodInput[]
    createMany?: Typo_emprendimientoCreateManyRela_typo_prodInputEnvelope
    set?: Typo_emprendimientoWhereUniqueInput | Typo_emprendimientoWhereUniqueInput[]
    disconnect?: Typo_emprendimientoWhereUniqueInput | Typo_emprendimientoWhereUniqueInput[]
    delete?: Typo_emprendimientoWhereUniqueInput | Typo_emprendimientoWhereUniqueInput[]
    connect?: Typo_emprendimientoWhereUniqueInput | Typo_emprendimientoWhereUniqueInput[]
    update?: Typo_emprendimientoUpdateWithWhereUniqueWithoutRela_typo_prodInput | Typo_emprendimientoUpdateWithWhereUniqueWithoutRela_typo_prodInput[]
    updateMany?: Typo_emprendimientoUpdateManyWithWhereWithoutRela_typo_prodInput | Typo_emprendimientoUpdateManyWithWhereWithoutRela_typo_prodInput[]
    deleteMany?: Typo_emprendimientoScalarWhereInput | Typo_emprendimientoScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductosCreateWithoutTypo_emprendimientoInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
  }

  export type ProductosUncheckedCreateWithoutTypo_emprendimientoInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
  }

  export type ProductosCreateOrConnectWithoutTypo_emprendimientoInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutTypo_emprendimientoInput, ProductosUncheckedCreateWithoutTypo_emprendimientoInput>
  }

  export type ProductosUpsertWithoutTypo_emprendimientoInput = {
    update: XOR<ProductosUpdateWithoutTypo_emprendimientoInput, ProductosUncheckedUpdateWithoutTypo_emprendimientoInput>
    create: XOR<ProductosCreateWithoutTypo_emprendimientoInput, ProductosUncheckedCreateWithoutTypo_emprendimientoInput>
    where?: ProductosWhereInput
  }

  export type ProductosUpdateToOneWithWhereWithoutTypo_emprendimientoInput = {
    where?: ProductosWhereInput
    data: XOR<ProductosUpdateWithoutTypo_emprendimientoInput, ProductosUncheckedUpdateWithoutTypo_emprendimientoInput>
  }

  export type ProductosUpdateWithoutTypo_emprendimientoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductosUncheckedUpdateWithoutTypo_emprendimientoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Typo_emprendimientoCreateWithoutRela_typo_prodInput = {
    typo: string
    descripcion: string
    foto?: string | null
  }

  export type Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput = {
    typo: string
    descripcion: string
    foto?: string | null
  }

  export type Typo_emprendimientoCreateOrConnectWithoutRela_typo_prodInput = {
    where: Typo_emprendimientoWhereUniqueInput
    create: XOR<Typo_emprendimientoCreateWithoutRela_typo_prodInput, Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput>
  }

  export type Typo_emprendimientoCreateManyRela_typo_prodInputEnvelope = {
    data: Typo_emprendimientoCreateManyRela_typo_prodInput | Typo_emprendimientoCreateManyRela_typo_prodInput[]
    skipDuplicates?: boolean
  }

  export type Typo_emprendimientoUpsertWithWhereUniqueWithoutRela_typo_prodInput = {
    where: Typo_emprendimientoWhereUniqueInput
    update: XOR<Typo_emprendimientoUpdateWithoutRela_typo_prodInput, Typo_emprendimientoUncheckedUpdateWithoutRela_typo_prodInput>
    create: XOR<Typo_emprendimientoCreateWithoutRela_typo_prodInput, Typo_emprendimientoUncheckedCreateWithoutRela_typo_prodInput>
  }

  export type Typo_emprendimientoUpdateWithWhereUniqueWithoutRela_typo_prodInput = {
    where: Typo_emprendimientoWhereUniqueInput
    data: XOR<Typo_emprendimientoUpdateWithoutRela_typo_prodInput, Typo_emprendimientoUncheckedUpdateWithoutRela_typo_prodInput>
  }

  export type Typo_emprendimientoUpdateManyWithWhereWithoutRela_typo_prodInput = {
    where: Typo_emprendimientoScalarWhereInput
    data: XOR<Typo_emprendimientoUpdateManyMutationInput, Typo_emprendimientoUncheckedUpdateManyWithoutRela_typo_prodInput>
  }

  export type Typo_emprendimientoScalarWhereInput = {
    AND?: Typo_emprendimientoScalarWhereInput | Typo_emprendimientoScalarWhereInput[]
    OR?: Typo_emprendimientoScalarWhereInput[]
    NOT?: Typo_emprendimientoScalarWhereInput | Typo_emprendimientoScalarWhereInput[]
    typo?: StringFilter<"Typo_emprendimiento"> | string
    descripcion?: StringFilter<"Typo_emprendimiento"> | string
    foto?: StringNullableFilter<"Typo_emprendimiento"> | string | null
    producto?: StringFilter<"Typo_emprendimiento"> | string
  }

  export type Typo_emprendimientoCreateManyRela_typo_prodInput = {
    typo: string
    descripcion: string
    foto?: string | null
  }

  export type Typo_emprendimientoUpdateWithoutRela_typo_prodInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Typo_emprendimientoUncheckedUpdateWithoutRela_typo_prodInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Typo_emprendimientoUncheckedUpdateManyWithoutRela_typo_prodInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}