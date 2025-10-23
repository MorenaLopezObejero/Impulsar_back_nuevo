
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Emprendimiento
 * 
 */
export type Emprendimiento = $Result.DefaultSelection<Prisma.$EmprendimientoPayload>
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
 * Model Productos_CyS
 * 
 */
export type Productos_CyS = $Result.DefaultSelection<Prisma.$Productos_CySPayload>
/**
 * Model Prod_Mat
 * 
 */
export type Prod_Mat = $Result.DefaultSelection<Prisma.$Prod_MatPayload>
/**
 * Model Materiales
 * 
 */
export type Materiales = $Result.DefaultSelection<Prisma.$MaterialesPayload>
/**
 * Model Materiales_CyS
 * 
 */
export type Materiales_CyS = $Result.DefaultSelection<Prisma.$Materiales_CySPayload>
/**
 * Model Contactos
 * 
 */
export type Contactos = $Result.DefaultSelection<Prisma.$ContactosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emprendimiento`: Exposes CRUD operations for the **Emprendimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprendimientos
    * const emprendimientos = await prisma.emprendimiento.findMany()
    * ```
    */
  get emprendimiento(): Prisma.EmprendimientoDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.productos_CyS`: Exposes CRUD operations for the **Productos_CyS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos_CyS
    * const productos_CyS = await prisma.productos_CyS.findMany()
    * ```
    */
  get productos_CyS(): Prisma.Productos_CySDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prod_Mat`: Exposes CRUD operations for the **Prod_Mat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prod_Mats
    * const prod_Mats = await prisma.prod_Mat.findMany()
    * ```
    */
  get prod_Mat(): Prisma.Prod_MatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materiales`: Exposes CRUD operations for the **Materiales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materiales
    * const materiales = await prisma.materiales.findMany()
    * ```
    */
  get materiales(): Prisma.MaterialesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materiales_CyS`: Exposes CRUD operations for the **Materiales_CyS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materiales_CyS
    * const materiales_CyS = await prisma.materiales_CyS.findMany()
    * ```
    */
  get materiales_CyS(): Prisma.Materiales_CySDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactos`: Exposes CRUD operations for the **Contactos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactos
    * const contactos = await prisma.contactos.findMany()
    * ```
    */
  get contactos(): Prisma.ContactosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Usuario: 'Usuario',
    Emprendimiento: 'Emprendimiento',
    Typo_emprendimiento: 'Typo_emprendimiento',
    Productos: 'Productos',
    Productos_CyS: 'Productos_CyS',
    Prod_Mat: 'Prod_Mat',
    Materiales: 'Materiales',
    Materiales_CyS: 'Materiales_CyS',
    Contactos: 'Contactos'
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
      modelProps: "usuario" | "emprendimiento" | "typo_emprendimiento" | "productos" | "productos_CyS" | "prod_Mat" | "materiales" | "materiales_CyS" | "contactos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Emprendimiento: {
        payload: Prisma.$EmprendimientoPayload<ExtArgs>
        fields: Prisma.EmprendimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmprendimientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmprendimientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload>
          }
          findFirst: {
            args: Prisma.EmprendimientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmprendimientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload>
          }
          findMany: {
            args: Prisma.EmprendimientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload>[]
          }
          create: {
            args: Prisma.EmprendimientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload>
          }
          createMany: {
            args: Prisma.EmprendimientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmprendimientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload>[]
          }
          delete: {
            args: Prisma.EmprendimientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload>
          }
          update: {
            args: Prisma.EmprendimientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload>
          }
          deleteMany: {
            args: Prisma.EmprendimientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmprendimientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmprendimientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload>[]
          }
          upsert: {
            args: Prisma.EmprendimientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprendimientoPayload>
          }
          aggregate: {
            args: Prisma.EmprendimientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprendimiento>
          }
          groupBy: {
            args: Prisma.EmprendimientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmprendimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmprendimientoCountArgs<ExtArgs>
            result: $Utils.Optional<EmprendimientoCountAggregateOutputType> | number
          }
        }
      }
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
      Productos_CyS: {
        payload: Prisma.$Productos_CySPayload<ExtArgs>
        fields: Prisma.Productos_CySFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Productos_CySFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Productos_CySFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload>
          }
          findFirst: {
            args: Prisma.Productos_CySFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Productos_CySFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload>
          }
          findMany: {
            args: Prisma.Productos_CySFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload>[]
          }
          create: {
            args: Prisma.Productos_CySCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload>
          }
          createMany: {
            args: Prisma.Productos_CySCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Productos_CySCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload>[]
          }
          delete: {
            args: Prisma.Productos_CySDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload>
          }
          update: {
            args: Prisma.Productos_CySUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload>
          }
          deleteMany: {
            args: Prisma.Productos_CySDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Productos_CySUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Productos_CySUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload>[]
          }
          upsert: {
            args: Prisma.Productos_CySUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Productos_CySPayload>
          }
          aggregate: {
            args: Prisma.Productos_CySAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos_CyS>
          }
          groupBy: {
            args: Prisma.Productos_CySGroupByArgs<ExtArgs>
            result: $Utils.Optional<Productos_CySGroupByOutputType>[]
          }
          count: {
            args: Prisma.Productos_CySCountArgs<ExtArgs>
            result: $Utils.Optional<Productos_CySCountAggregateOutputType> | number
          }
        }
      }
      Prod_Mat: {
        payload: Prisma.$Prod_MatPayload<ExtArgs>
        fields: Prisma.Prod_MatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Prod_MatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Prod_MatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload>
          }
          findFirst: {
            args: Prisma.Prod_MatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Prod_MatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload>
          }
          findMany: {
            args: Prisma.Prod_MatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload>[]
          }
          create: {
            args: Prisma.Prod_MatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload>
          }
          createMany: {
            args: Prisma.Prod_MatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Prod_MatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload>[]
          }
          delete: {
            args: Prisma.Prod_MatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload>
          }
          update: {
            args: Prisma.Prod_MatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload>
          }
          deleteMany: {
            args: Prisma.Prod_MatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Prod_MatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Prod_MatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload>[]
          }
          upsert: {
            args: Prisma.Prod_MatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Prod_MatPayload>
          }
          aggregate: {
            args: Prisma.Prod_MatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProd_Mat>
          }
          groupBy: {
            args: Prisma.Prod_MatGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prod_MatGroupByOutputType>[]
          }
          count: {
            args: Prisma.Prod_MatCountArgs<ExtArgs>
            result: $Utils.Optional<Prod_MatCountAggregateOutputType> | number
          }
        }
      }
      Materiales: {
        payload: Prisma.$MaterialesPayload<ExtArgs>
        fields: Prisma.MaterialesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload>
          }
          findFirst: {
            args: Prisma.MaterialesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload>
          }
          findMany: {
            args: Prisma.MaterialesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload>[]
          }
          create: {
            args: Prisma.MaterialesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload>
          }
          createMany: {
            args: Prisma.MaterialesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload>[]
          }
          delete: {
            args: Prisma.MaterialesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload>
          }
          update: {
            args: Prisma.MaterialesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload>
          }
          deleteMany: {
            args: Prisma.MaterialesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload>[]
          }
          upsert: {
            args: Prisma.MaterialesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialesPayload>
          }
          aggregate: {
            args: Prisma.MaterialesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateriales>
          }
          groupBy: {
            args: Prisma.MaterialesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialesCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialesCountAggregateOutputType> | number
          }
        }
      }
      Materiales_CyS: {
        payload: Prisma.$Materiales_CySPayload<ExtArgs>
        fields: Prisma.Materiales_CySFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Materiales_CySFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Materiales_CySFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload>
          }
          findFirst: {
            args: Prisma.Materiales_CySFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Materiales_CySFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload>
          }
          findMany: {
            args: Prisma.Materiales_CySFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload>[]
          }
          create: {
            args: Prisma.Materiales_CySCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload>
          }
          createMany: {
            args: Prisma.Materiales_CySCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Materiales_CySCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload>[]
          }
          delete: {
            args: Prisma.Materiales_CySDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload>
          }
          update: {
            args: Prisma.Materiales_CySUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload>
          }
          deleteMany: {
            args: Prisma.Materiales_CySDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Materiales_CySUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Materiales_CySUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload>[]
          }
          upsert: {
            args: Prisma.Materiales_CySUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materiales_CySPayload>
          }
          aggregate: {
            args: Prisma.Materiales_CySAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateriales_CyS>
          }
          groupBy: {
            args: Prisma.Materiales_CySGroupByArgs<ExtArgs>
            result: $Utils.Optional<Materiales_CySGroupByOutputType>[]
          }
          count: {
            args: Prisma.Materiales_CySCountArgs<ExtArgs>
            result: $Utils.Optional<Materiales_CySCountAggregateOutputType> | number
          }
        }
      }
      Contactos: {
        payload: Prisma.$ContactosPayload<ExtArgs>
        fields: Prisma.ContactosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload>
          }
          findFirst: {
            args: Prisma.ContactosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload>
          }
          findMany: {
            args: Prisma.ContactosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload>[]
          }
          create: {
            args: Prisma.ContactosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload>
          }
          createMany: {
            args: Prisma.ContactosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload>[]
          }
          delete: {
            args: Prisma.ContactosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload>
          }
          update: {
            args: Prisma.ContactosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload>
          }
          deleteMany: {
            args: Prisma.ContactosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload>[]
          }
          upsert: {
            args: Prisma.ContactosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactosPayload>
          }
          aggregate: {
            args: Prisma.ContactosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactos>
          }
          groupBy: {
            args: Prisma.ContactosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactosCountArgs<ExtArgs>
            result: $Utils.Optional<ContactosCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuario?: UsuarioOmit
    emprendimiento?: EmprendimientoOmit
    typo_emprendimiento?: Typo_emprendimientoOmit
    productos?: ProductosOmit
    productos_CyS?: Productos_CySOmit
    prod_Mat?: Prod_MatOmit
    materiales?: MaterialesOmit
    materiales_CyS?: Materiales_CySOmit
    contactos?: ContactosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    emprendimiento: number
    contactos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprendimiento?: boolean | UsuarioCountOutputTypeCountEmprendimientoArgs
    contactos?: boolean | UsuarioCountOutputTypeCountContactosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEmprendimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprendimientoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountContactosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactosWhereInput
  }


  /**
   * Count Type EmprendimientoCountOutputType
   */

  export type EmprendimientoCountOutputType = {
    material_CyS: number
    producto_CyS: number
  }

  export type EmprendimientoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material_CyS?: boolean | EmprendimientoCountOutputTypeCountMaterial_CySArgs
    producto_CyS?: boolean | EmprendimientoCountOutputTypeCountProducto_CySArgs
  }

  // Custom InputTypes
  /**
   * EmprendimientoCountOutputType without action
   */
  export type EmprendimientoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmprendimientoCountOutputType
     */
    select?: EmprendimientoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmprendimientoCountOutputType without action
   */
  export type EmprendimientoCountOutputTypeCountMaterial_CySArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Materiales_CySWhereInput
  }

  /**
   * EmprendimientoCountOutputType without action
   */
  export type EmprendimientoCountOutputTypeCountProducto_CySArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Productos_CySWhereInput
  }


  /**
   * Count Type Typo_emprendimientoCountOutputType
   */

  export type Typo_emprendimientoCountOutputType = {
    producto: number
    emprendimiento: number
  }

  export type Typo_emprendimientoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | Typo_emprendimientoCountOutputTypeCountProductoArgs
    emprendimiento?: boolean | Typo_emprendimientoCountOutputTypeCountEmprendimientoArgs
  }

  // Custom InputTypes
  /**
   * Typo_emprendimientoCountOutputType without action
   */
  export type Typo_emprendimientoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Typo_emprendimientoCountOutputType
     */
    select?: Typo_emprendimientoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Typo_emprendimientoCountOutputType without action
   */
  export type Typo_emprendimientoCountOutputTypeCountProductoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductosWhereInput
  }

  /**
   * Typo_emprendimientoCountOutputType without action
   */
  export type Typo_emprendimientoCountOutputTypeCountEmprendimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprendimientoWhereInput
  }


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    prod_mat: number
    producto_CyS: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prod_mat?: boolean | ProductosCountOutputTypeCountProd_matArgs
    producto_CyS?: boolean | ProductosCountOutputTypeCountProducto_CySArgs
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
  export type ProductosCountOutputTypeCountProd_matArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Prod_MatWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountProducto_CySArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Productos_CySWhereInput
  }


  /**
   * Count Type MaterialesCountOutputType
   */

  export type MaterialesCountOutputType = {
    prod_mat: number
    materiales_CyS: number
  }

  export type MaterialesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prod_mat?: boolean | MaterialesCountOutputTypeCountProd_matArgs
    materiales_CyS?: boolean | MaterialesCountOutputTypeCountMateriales_CySArgs
  }

  // Custom InputTypes
  /**
   * MaterialesCountOutputType without action
   */
  export type MaterialesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialesCountOutputType
     */
    select?: MaterialesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialesCountOutputType without action
   */
  export type MaterialesCountOutputTypeCountProd_matArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Prod_MatWhereInput
  }

  /**
   * MaterialesCountOutputType without action
   */
  export type MaterialesCountOutputTypeCountMateriales_CySArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Materiales_CySWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    email: string | null
    contasena: string | null
    nombreUsu: string | null
    foto: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    email: string | null
    contasena: string | null
    nombreUsu: string | null
    foto: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    email: number
    contasena: number
    nombreUsu: number
    foto: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    email?: true
    contasena?: true
    nombreUsu?: true
    foto?: true
  }

  export type UsuarioMaxAggregateInputType = {
    email?: true
    contasena?: true
    nombreUsu?: true
    foto?: true
  }

  export type UsuarioCountAggregateInputType = {
    email?: true
    contasena?: true
    nombreUsu?: true
    foto?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    email: string
    contasena: string
    nombreUsu: string
    foto: string | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    contasena?: boolean
    nombreUsu?: boolean
    foto?: boolean
    emprendimiento?: boolean | Usuario$emprendimientoArgs<ExtArgs>
    contactos?: boolean | Usuario$contactosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    contasena?: boolean
    nombreUsu?: boolean
    foto?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    contasena?: boolean
    nombreUsu?: boolean
    foto?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    email?: boolean
    contasena?: boolean
    nombreUsu?: boolean
    foto?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "contasena" | "nombreUsu" | "foto", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprendimiento?: boolean | Usuario$emprendimientoArgs<ExtArgs>
    contactos?: boolean | Usuario$contactosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      emprendimiento: Prisma.$EmprendimientoPayload<ExtArgs>[]
      contactos: Prisma.$ContactosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      email: string
      contasena: string
      nombreUsu: string
      foto: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const usuarioWithEmailOnly = await prisma.usuario.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `email`
     * const usuarioWithEmailOnly = await prisma.usuario.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `email`
     * const usuarioWithEmailOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { email: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprendimiento<T extends Usuario$emprendimientoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$emprendimientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactos<T extends Usuario$contactosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$contactosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly email: FieldRef<"Usuario", 'String'>
    readonly contasena: FieldRef<"Usuario", 'String'>
    readonly nombreUsu: FieldRef<"Usuario", 'String'>
    readonly foto: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.emprendimiento
   */
  export type Usuario$emprendimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    where?: EmprendimientoWhereInput
    orderBy?: EmprendimientoOrderByWithRelationInput | EmprendimientoOrderByWithRelationInput[]
    cursor?: EmprendimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprendimientoScalarFieldEnum | EmprendimientoScalarFieldEnum[]
  }

  /**
   * Usuario.contactos
   */
  export type Usuario$contactosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
    where?: ContactosWhereInput
    orderBy?: ContactosOrderByWithRelationInput | ContactosOrderByWithRelationInput[]
    cursor?: ContactosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactosScalarFieldEnum | ContactosScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Emprendimiento
   */

  export type AggregateEmprendimiento = {
    _count: EmprendimientoCountAggregateOutputType | null
    _avg: EmprendimientoAvgAggregateOutputType | null
    _sum: EmprendimientoSumAggregateOutputType | null
    _min: EmprendimientoMinAggregateOutputType | null
    _max: EmprendimientoMaxAggregateOutputType | null
  }

  export type EmprendimientoAvgAggregateOutputType = {
    Id: number | null
  }

  export type EmprendimientoSumAggregateOutputType = {
    Id: number | null
  }

  export type EmprendimientoMinAggregateOutputType = {
    Id: number | null
    nombreEmp: string | null
    colores: string | null
    usuario: string | null
    tipo: string | null
  }

  export type EmprendimientoMaxAggregateOutputType = {
    Id: number | null
    nombreEmp: string | null
    colores: string | null
    usuario: string | null
    tipo: string | null
  }

  export type EmprendimientoCountAggregateOutputType = {
    Id: number
    nombreEmp: number
    colores: number
    usuario: number
    tipo: number
    _all: number
  }


  export type EmprendimientoAvgAggregateInputType = {
    Id?: true
  }

  export type EmprendimientoSumAggregateInputType = {
    Id?: true
  }

  export type EmprendimientoMinAggregateInputType = {
    Id?: true
    nombreEmp?: true
    colores?: true
    usuario?: true
    tipo?: true
  }

  export type EmprendimientoMaxAggregateInputType = {
    Id?: true
    nombreEmp?: true
    colores?: true
    usuario?: true
    tipo?: true
  }

  export type EmprendimientoCountAggregateInputType = {
    Id?: true
    nombreEmp?: true
    colores?: true
    usuario?: true
    tipo?: true
    _all?: true
  }

  export type EmprendimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprendimiento to aggregate.
     */
    where?: EmprendimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprendimientos to fetch.
     */
    orderBy?: EmprendimientoOrderByWithRelationInput | EmprendimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmprendimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprendimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprendimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emprendimientos
    **/
    _count?: true | EmprendimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmprendimientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmprendimientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmprendimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmprendimientoMaxAggregateInputType
  }

  export type GetEmprendimientoAggregateType<T extends EmprendimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprendimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprendimiento[P]>
      : GetScalarType<T[P], AggregateEmprendimiento[P]>
  }




  export type EmprendimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprendimientoWhereInput
    orderBy?: EmprendimientoOrderByWithAggregationInput | EmprendimientoOrderByWithAggregationInput[]
    by: EmprendimientoScalarFieldEnum[] | EmprendimientoScalarFieldEnum
    having?: EmprendimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmprendimientoCountAggregateInputType | true
    _avg?: EmprendimientoAvgAggregateInputType
    _sum?: EmprendimientoSumAggregateInputType
    _min?: EmprendimientoMinAggregateInputType
    _max?: EmprendimientoMaxAggregateInputType
  }

  export type EmprendimientoGroupByOutputType = {
    Id: number
    nombreEmp: string
    colores: string | null
    usuario: string
    tipo: string
    _count: EmprendimientoCountAggregateOutputType | null
    _avg: EmprendimientoAvgAggregateOutputType | null
    _sum: EmprendimientoSumAggregateOutputType | null
    _min: EmprendimientoMinAggregateOutputType | null
    _max: EmprendimientoMaxAggregateOutputType | null
  }

  type GetEmprendimientoGroupByPayload<T extends EmprendimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmprendimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmprendimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmprendimientoGroupByOutputType[P]>
            : GetScalarType<T[P], EmprendimientoGroupByOutputType[P]>
        }
      >
    >


  export type EmprendimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    nombreEmp?: boolean
    colores?: boolean
    usuario?: boolean
    tipo?: boolean
    rela_emp_usu?: boolean | UsuarioDefaultArgs<ExtArgs>
    rela_emp_typoemp?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
    material_CyS?: boolean | Emprendimiento$material_CySArgs<ExtArgs>
    producto_CyS?: boolean | Emprendimiento$producto_CySArgs<ExtArgs>
    _count?: boolean | EmprendimientoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprendimiento"]>

  export type EmprendimientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    nombreEmp?: boolean
    colores?: boolean
    usuario?: boolean
    tipo?: boolean
    rela_emp_usu?: boolean | UsuarioDefaultArgs<ExtArgs>
    rela_emp_typoemp?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprendimiento"]>

  export type EmprendimientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    nombreEmp?: boolean
    colores?: boolean
    usuario?: boolean
    tipo?: boolean
    rela_emp_usu?: boolean | UsuarioDefaultArgs<ExtArgs>
    rela_emp_typoemp?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprendimiento"]>

  export type EmprendimientoSelectScalar = {
    Id?: boolean
    nombreEmp?: boolean
    colores?: boolean
    usuario?: boolean
    tipo?: boolean
  }

  export type EmprendimientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "nombreEmp" | "colores" | "usuario" | "tipo", ExtArgs["result"]["emprendimiento"]>
  export type EmprendimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_emp_usu?: boolean | UsuarioDefaultArgs<ExtArgs>
    rela_emp_typoemp?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
    material_CyS?: boolean | Emprendimiento$material_CySArgs<ExtArgs>
    producto_CyS?: boolean | Emprendimiento$producto_CySArgs<ExtArgs>
    _count?: boolean | EmprendimientoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmprendimientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_emp_usu?: boolean | UsuarioDefaultArgs<ExtArgs>
    rela_emp_typoemp?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
  }
  export type EmprendimientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_emp_usu?: boolean | UsuarioDefaultArgs<ExtArgs>
    rela_emp_typoemp?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
  }

  export type $EmprendimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emprendimiento"
    objects: {
      rela_emp_usu: Prisma.$UsuarioPayload<ExtArgs>
      rela_emp_typoemp: Prisma.$Typo_emprendimientoPayload<ExtArgs>
      material_CyS: Prisma.$Materiales_CySPayload<ExtArgs>[]
      producto_CyS: Prisma.$Productos_CySPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      nombreEmp: string
      colores: string | null
      usuario: string
      tipo: string
    }, ExtArgs["result"]["emprendimiento"]>
    composites: {}
  }

  type EmprendimientoGetPayload<S extends boolean | null | undefined | EmprendimientoDefaultArgs> = $Result.GetResult<Prisma.$EmprendimientoPayload, S>

  type EmprendimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmprendimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmprendimientoCountAggregateInputType | true
    }

  export interface EmprendimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emprendimiento'], meta: { name: 'Emprendimiento' } }
    /**
     * Find zero or one Emprendimiento that matches the filter.
     * @param {EmprendimientoFindUniqueArgs} args - Arguments to find a Emprendimiento
     * @example
     * // Get one Emprendimiento
     * const emprendimiento = await prisma.emprendimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmprendimientoFindUniqueArgs>(args: SelectSubset<T, EmprendimientoFindUniqueArgs<ExtArgs>>): Prisma__EmprendimientoClient<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprendimiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmprendimientoFindUniqueOrThrowArgs} args - Arguments to find a Emprendimiento
     * @example
     * // Get one Emprendimiento
     * const emprendimiento = await prisma.emprendimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmprendimientoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmprendimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmprendimientoClient<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprendimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprendimientoFindFirstArgs} args - Arguments to find a Emprendimiento
     * @example
     * // Get one Emprendimiento
     * const emprendimiento = await prisma.emprendimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmprendimientoFindFirstArgs>(args?: SelectSubset<T, EmprendimientoFindFirstArgs<ExtArgs>>): Prisma__EmprendimientoClient<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprendimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprendimientoFindFirstOrThrowArgs} args - Arguments to find a Emprendimiento
     * @example
     * // Get one Emprendimiento
     * const emprendimiento = await prisma.emprendimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmprendimientoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmprendimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmprendimientoClient<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprendimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprendimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprendimientos
     * const emprendimientos = await prisma.emprendimiento.findMany()
     * 
     * // Get first 10 Emprendimientos
     * const emprendimientos = await prisma.emprendimiento.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const emprendimientoWithIdOnly = await prisma.emprendimiento.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends EmprendimientoFindManyArgs>(args?: SelectSubset<T, EmprendimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprendimiento.
     * @param {EmprendimientoCreateArgs} args - Arguments to create a Emprendimiento.
     * @example
     * // Create one Emprendimiento
     * const Emprendimiento = await prisma.emprendimiento.create({
     *   data: {
     *     // ... data to create a Emprendimiento
     *   }
     * })
     * 
     */
    create<T extends EmprendimientoCreateArgs>(args: SelectSubset<T, EmprendimientoCreateArgs<ExtArgs>>): Prisma__EmprendimientoClient<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprendimientos.
     * @param {EmprendimientoCreateManyArgs} args - Arguments to create many Emprendimientos.
     * @example
     * // Create many Emprendimientos
     * const emprendimiento = await prisma.emprendimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmprendimientoCreateManyArgs>(args?: SelectSubset<T, EmprendimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emprendimientos and returns the data saved in the database.
     * @param {EmprendimientoCreateManyAndReturnArgs} args - Arguments to create many Emprendimientos.
     * @example
     * // Create many Emprendimientos
     * const emprendimiento = await prisma.emprendimiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emprendimientos and only return the `Id`
     * const emprendimientoWithIdOnly = await prisma.emprendimiento.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmprendimientoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmprendimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emprendimiento.
     * @param {EmprendimientoDeleteArgs} args - Arguments to delete one Emprendimiento.
     * @example
     * // Delete one Emprendimiento
     * const Emprendimiento = await prisma.emprendimiento.delete({
     *   where: {
     *     // ... filter to delete one Emprendimiento
     *   }
     * })
     * 
     */
    delete<T extends EmprendimientoDeleteArgs>(args: SelectSubset<T, EmprendimientoDeleteArgs<ExtArgs>>): Prisma__EmprendimientoClient<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprendimiento.
     * @param {EmprendimientoUpdateArgs} args - Arguments to update one Emprendimiento.
     * @example
     * // Update one Emprendimiento
     * const emprendimiento = await prisma.emprendimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmprendimientoUpdateArgs>(args: SelectSubset<T, EmprendimientoUpdateArgs<ExtArgs>>): Prisma__EmprendimientoClient<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprendimientos.
     * @param {EmprendimientoDeleteManyArgs} args - Arguments to filter Emprendimientos to delete.
     * @example
     * // Delete a few Emprendimientos
     * const { count } = await prisma.emprendimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmprendimientoDeleteManyArgs>(args?: SelectSubset<T, EmprendimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprendimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprendimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprendimientos
     * const emprendimiento = await prisma.emprendimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmprendimientoUpdateManyArgs>(args: SelectSubset<T, EmprendimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprendimientos and returns the data updated in the database.
     * @param {EmprendimientoUpdateManyAndReturnArgs} args - Arguments to update many Emprendimientos.
     * @example
     * // Update many Emprendimientos
     * const emprendimiento = await prisma.emprendimiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emprendimientos and only return the `Id`
     * const emprendimientoWithIdOnly = await prisma.emprendimiento.updateManyAndReturn({
     *   select: { Id: true },
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
    updateManyAndReturn<T extends EmprendimientoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmprendimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emprendimiento.
     * @param {EmprendimientoUpsertArgs} args - Arguments to update or create a Emprendimiento.
     * @example
     * // Update or create a Emprendimiento
     * const emprendimiento = await prisma.emprendimiento.upsert({
     *   create: {
     *     // ... data to create a Emprendimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprendimiento we want to update
     *   }
     * })
     */
    upsert<T extends EmprendimientoUpsertArgs>(args: SelectSubset<T, EmprendimientoUpsertArgs<ExtArgs>>): Prisma__EmprendimientoClient<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emprendimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprendimientoCountArgs} args - Arguments to filter Emprendimientos to count.
     * @example
     * // Count the number of Emprendimientos
     * const count = await prisma.emprendimiento.count({
     *   where: {
     *     // ... the filter for the Emprendimientos we want to count
     *   }
     * })
    **/
    count<T extends EmprendimientoCountArgs>(
      args?: Subset<T, EmprendimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmprendimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprendimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprendimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmprendimientoAggregateArgs>(args: Subset<T, EmprendimientoAggregateArgs>): Prisma.PrismaPromise<GetEmprendimientoAggregateType<T>>

    /**
     * Group by Emprendimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprendimientoGroupByArgs} args - Group by arguments.
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
      T extends EmprendimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmprendimientoGroupByArgs['orderBy'] }
        : { orderBy?: EmprendimientoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmprendimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmprendimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emprendimiento model
   */
  readonly fields: EmprendimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emprendimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmprendimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rela_emp_usu<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rela_emp_typoemp<T extends Typo_emprendimientoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Typo_emprendimientoDefaultArgs<ExtArgs>>): Prisma__Typo_emprendimientoClient<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material_CyS<T extends Emprendimiento$material_CySArgs<ExtArgs> = {}>(args?: Subset<T, Emprendimiento$material_CySArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    producto_CyS<T extends Emprendimiento$producto_CySArgs<ExtArgs> = {}>(args?: Subset<T, Emprendimiento$producto_CySArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Emprendimiento model
   */
  interface EmprendimientoFieldRefs {
    readonly Id: FieldRef<"Emprendimiento", 'Int'>
    readonly nombreEmp: FieldRef<"Emprendimiento", 'String'>
    readonly colores: FieldRef<"Emprendimiento", 'String'>
    readonly usuario: FieldRef<"Emprendimiento", 'String'>
    readonly tipo: FieldRef<"Emprendimiento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Emprendimiento findUnique
   */
  export type EmprendimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    /**
     * Filter, which Emprendimiento to fetch.
     */
    where: EmprendimientoWhereUniqueInput
  }

  /**
   * Emprendimiento findUniqueOrThrow
   */
  export type EmprendimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    /**
     * Filter, which Emprendimiento to fetch.
     */
    where: EmprendimientoWhereUniqueInput
  }

  /**
   * Emprendimiento findFirst
   */
  export type EmprendimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    /**
     * Filter, which Emprendimiento to fetch.
     */
    where?: EmprendimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprendimientos to fetch.
     */
    orderBy?: EmprendimientoOrderByWithRelationInput | EmprendimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprendimientos.
     */
    cursor?: EmprendimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprendimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprendimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprendimientos.
     */
    distinct?: EmprendimientoScalarFieldEnum | EmprendimientoScalarFieldEnum[]
  }

  /**
   * Emprendimiento findFirstOrThrow
   */
  export type EmprendimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    /**
     * Filter, which Emprendimiento to fetch.
     */
    where?: EmprendimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprendimientos to fetch.
     */
    orderBy?: EmprendimientoOrderByWithRelationInput | EmprendimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprendimientos.
     */
    cursor?: EmprendimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprendimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprendimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprendimientos.
     */
    distinct?: EmprendimientoScalarFieldEnum | EmprendimientoScalarFieldEnum[]
  }

  /**
   * Emprendimiento findMany
   */
  export type EmprendimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    /**
     * Filter, which Emprendimientos to fetch.
     */
    where?: EmprendimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprendimientos to fetch.
     */
    orderBy?: EmprendimientoOrderByWithRelationInput | EmprendimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emprendimientos.
     */
    cursor?: EmprendimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprendimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprendimientos.
     */
    skip?: number
    distinct?: EmprendimientoScalarFieldEnum | EmprendimientoScalarFieldEnum[]
  }

  /**
   * Emprendimiento create
   */
  export type EmprendimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Emprendimiento.
     */
    data: XOR<EmprendimientoCreateInput, EmprendimientoUncheckedCreateInput>
  }

  /**
   * Emprendimiento createMany
   */
  export type EmprendimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emprendimientos.
     */
    data: EmprendimientoCreateManyInput | EmprendimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emprendimiento createManyAndReturn
   */
  export type EmprendimientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * The data used to create many Emprendimientos.
     */
    data: EmprendimientoCreateManyInput | EmprendimientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprendimiento update
   */
  export type EmprendimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Emprendimiento.
     */
    data: XOR<EmprendimientoUpdateInput, EmprendimientoUncheckedUpdateInput>
    /**
     * Choose, which Emprendimiento to update.
     */
    where: EmprendimientoWhereUniqueInput
  }

  /**
   * Emprendimiento updateMany
   */
  export type EmprendimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emprendimientos.
     */
    data: XOR<EmprendimientoUpdateManyMutationInput, EmprendimientoUncheckedUpdateManyInput>
    /**
     * Filter which Emprendimientos to update
     */
    where?: EmprendimientoWhereInput
    /**
     * Limit how many Emprendimientos to update.
     */
    limit?: number
  }

  /**
   * Emprendimiento updateManyAndReturn
   */
  export type EmprendimientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * The data used to update Emprendimientos.
     */
    data: XOR<EmprendimientoUpdateManyMutationInput, EmprendimientoUncheckedUpdateManyInput>
    /**
     * Filter which Emprendimientos to update
     */
    where?: EmprendimientoWhereInput
    /**
     * Limit how many Emprendimientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprendimiento upsert
   */
  export type EmprendimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Emprendimiento to update in case it exists.
     */
    where: EmprendimientoWhereUniqueInput
    /**
     * In case the Emprendimiento found by the `where` argument doesn't exist, create a new Emprendimiento with this data.
     */
    create: XOR<EmprendimientoCreateInput, EmprendimientoUncheckedCreateInput>
    /**
     * In case the Emprendimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmprendimientoUpdateInput, EmprendimientoUncheckedUpdateInput>
  }

  /**
   * Emprendimiento delete
   */
  export type EmprendimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    /**
     * Filter which Emprendimiento to delete.
     */
    where: EmprendimientoWhereUniqueInput
  }

  /**
   * Emprendimiento deleteMany
   */
  export type EmprendimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprendimientos to delete
     */
    where?: EmprendimientoWhereInput
    /**
     * Limit how many Emprendimientos to delete.
     */
    limit?: number
  }

  /**
   * Emprendimiento.material_CyS
   */
  export type Emprendimiento$material_CySArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    where?: Materiales_CySWhereInput
    orderBy?: Materiales_CySOrderByWithRelationInput | Materiales_CySOrderByWithRelationInput[]
    cursor?: Materiales_CySWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Materiales_CySScalarFieldEnum | Materiales_CySScalarFieldEnum[]
  }

  /**
   * Emprendimiento.producto_CyS
   */
  export type Emprendimiento$producto_CySArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    where?: Productos_CySWhereInput
    orderBy?: Productos_CySOrderByWithRelationInput | Productos_CySOrderByWithRelationInput[]
    cursor?: Productos_CySWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Productos_CySScalarFieldEnum | Productos_CySScalarFieldEnum[]
  }

  /**
   * Emprendimiento without action
   */
  export type EmprendimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
  }


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
  }

  export type Typo_emprendimientoMaxAggregateOutputType = {
    typo: string | null
    descripcion: string | null
    foto: string | null
  }

  export type Typo_emprendimientoCountAggregateOutputType = {
    typo: number
    descripcion: number
    foto: number
    _all: number
  }


  export type Typo_emprendimientoMinAggregateInputType = {
    typo?: true
    descripcion?: true
    foto?: true
  }

  export type Typo_emprendimientoMaxAggregateInputType = {
    typo?: true
    descripcion?: true
    foto?: true
  }

  export type Typo_emprendimientoCountAggregateInputType = {
    typo?: true
    descripcion?: true
    foto?: true
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
    producto?: boolean | Typo_emprendimiento$productoArgs<ExtArgs>
    emprendimiento?: boolean | Typo_emprendimiento$emprendimientoArgs<ExtArgs>
    _count?: boolean | Typo_emprendimientoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typo_emprendimiento"]>

  export type Typo_emprendimientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    typo?: boolean
    descripcion?: boolean
    foto?: boolean
  }, ExtArgs["result"]["typo_emprendimiento"]>

  export type Typo_emprendimientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    typo?: boolean
    descripcion?: boolean
    foto?: boolean
  }, ExtArgs["result"]["typo_emprendimiento"]>

  export type Typo_emprendimientoSelectScalar = {
    typo?: boolean
    descripcion?: boolean
    foto?: boolean
  }

  export type Typo_emprendimientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"typo" | "descripcion" | "foto", ExtArgs["result"]["typo_emprendimiento"]>
  export type Typo_emprendimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | Typo_emprendimiento$productoArgs<ExtArgs>
    emprendimiento?: boolean | Typo_emprendimiento$emprendimientoArgs<ExtArgs>
    _count?: boolean | Typo_emprendimientoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Typo_emprendimientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Typo_emprendimientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Typo_emprendimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Typo_emprendimiento"
    objects: {
      producto: Prisma.$ProductosPayload<ExtArgs>[]
      emprendimiento: Prisma.$EmprendimientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      typo: string
      descripcion: string
      foto: string | null
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
    producto<T extends Typo_emprendimiento$productoArgs<ExtArgs> = {}>(args?: Subset<T, Typo_emprendimiento$productoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emprendimiento<T extends Typo_emprendimiento$emprendimientoArgs<ExtArgs> = {}>(args?: Subset<T, Typo_emprendimiento$emprendimientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Typo_emprendimiento.producto
   */
  export type Typo_emprendimiento$productoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: ProductosWhereInput
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    cursor?: ProductosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Typo_emprendimiento.emprendimiento
   */
  export type Typo_emprendimiento$emprendimientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprendimiento
     */
    select?: EmprendimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprendimiento
     */
    omit?: EmprendimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprendimientoInclude<ExtArgs> | null
    where?: EmprendimientoWhereInput
    orderBy?: EmprendimientoOrderByWithRelationInput | EmprendimientoOrderByWithRelationInput[]
    cursor?: EmprendimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprendimientoScalarFieldEnum | EmprendimientoScalarFieldEnum[]
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
    tipo: string | null
  }

  export type ProductosMaxAggregateOutputType = {
    nombre: string | null
    descripcion: string | null
    pasos: string | null
    herramientas: string | null
    foto: string | null
    tipo: string | null
  }

  export type ProductosCountAggregateOutputType = {
    nombre: number
    descripcion: number
    pasos: number
    herramientas: number
    foto: number
    tipo: number
    _all: number
  }


  export type ProductosMinAggregateInputType = {
    nombre?: true
    descripcion?: true
    pasos?: true
    herramientas?: true
    foto?: true
    tipo?: true
  }

  export type ProductosMaxAggregateInputType = {
    nombre?: true
    descripcion?: true
    pasos?: true
    herramientas?: true
    foto?: true
    tipo?: true
  }

  export type ProductosCountAggregateInputType = {
    nombre?: true
    descripcion?: true
    pasos?: true
    herramientas?: true
    foto?: true
    tipo?: true
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
    tipo: string
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
    tipo?: boolean
    rela_prod_typo?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
    prod_mat?: boolean | Productos$prod_matArgs<ExtArgs>
    producto_CyS?: boolean | Productos$producto_CySArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    descripcion?: boolean
    pasos?: boolean
    herramientas?: boolean
    foto?: boolean
    tipo?: boolean
    rela_prod_typo?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    descripcion?: boolean
    pasos?: boolean
    herramientas?: boolean
    foto?: boolean
    tipo?: boolean
    rela_prod_typo?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectScalar = {
    nombre?: boolean
    descripcion?: boolean
    pasos?: boolean
    herramientas?: boolean
    foto?: boolean
    tipo?: boolean
  }

  export type ProductosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nombre" | "descripcion" | "pasos" | "herramientas" | "foto" | "tipo", ExtArgs["result"]["productos"]>
  export type ProductosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_prod_typo?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
    prod_mat?: boolean | Productos$prod_matArgs<ExtArgs>
    producto_CyS?: boolean | Productos$producto_CySArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_prod_typo?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
  }
  export type ProductosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_prod_typo?: boolean | Typo_emprendimientoDefaultArgs<ExtArgs>
  }

  export type $ProductosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Productos"
    objects: {
      rela_prod_typo: Prisma.$Typo_emprendimientoPayload<ExtArgs>
      prod_mat: Prisma.$Prod_MatPayload<ExtArgs>[]
      producto_CyS: Prisma.$Productos_CySPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nombre: string
      descripcion: string
      pasos: string
      herramientas: string
      foto: string | null
      tipo: string
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
    rela_prod_typo<T extends Typo_emprendimientoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Typo_emprendimientoDefaultArgs<ExtArgs>>): Prisma__Typo_emprendimientoClient<$Result.GetResult<Prisma.$Typo_emprendimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prod_mat<T extends Productos$prod_matArgs<ExtArgs> = {}>(args?: Subset<T, Productos$prod_matArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    producto_CyS<T extends Productos$producto_CySArgs<ExtArgs> = {}>(args?: Subset<T, Productos$producto_CySArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly tipo: FieldRef<"Productos", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Productos.prod_mat
   */
  export type Productos$prod_matArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    where?: Prod_MatWhereInput
    orderBy?: Prod_MatOrderByWithRelationInput | Prod_MatOrderByWithRelationInput[]
    cursor?: Prod_MatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prod_MatScalarFieldEnum | Prod_MatScalarFieldEnum[]
  }

  /**
   * Productos.producto_CyS
   */
  export type Productos$producto_CySArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    where?: Productos_CySWhereInput
    orderBy?: Productos_CySOrderByWithRelationInput | Productos_CySOrderByWithRelationInput[]
    cursor?: Productos_CySWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Productos_CySScalarFieldEnum | Productos_CySScalarFieldEnum[]
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
   * Model Productos_CyS
   */

  export type AggregateProductos_CyS = {
    _count: Productos_CySCountAggregateOutputType | null
    _avg: Productos_CySAvgAggregateOutputType | null
    _sum: Productos_CySSumAggregateOutputType | null
    _min: Productos_CySMinAggregateOutputType | null
    _max: Productos_CySMaxAggregateOutputType | null
  }

  export type Productos_CySAvgAggregateOutputType = {
    Id: number | null
    stock: number | null
    emprendimiento: number | null
  }

  export type Productos_CySSumAggregateOutputType = {
    Id: number | null
    stock: number | null
    emprendimiento: number | null
  }

  export type Productos_CySMinAggregateOutputType = {
    Id: number | null
    costo: string | null
    stock: number | null
    producto: string | null
    emprendimiento: number | null
  }

  export type Productos_CySMaxAggregateOutputType = {
    Id: number | null
    costo: string | null
    stock: number | null
    producto: string | null
    emprendimiento: number | null
  }

  export type Productos_CySCountAggregateOutputType = {
    Id: number
    costo: number
    stock: number
    producto: number
    emprendimiento: number
    _all: number
  }


  export type Productos_CySAvgAggregateInputType = {
    Id?: true
    stock?: true
    emprendimiento?: true
  }

  export type Productos_CySSumAggregateInputType = {
    Id?: true
    stock?: true
    emprendimiento?: true
  }

  export type Productos_CySMinAggregateInputType = {
    Id?: true
    costo?: true
    stock?: true
    producto?: true
    emprendimiento?: true
  }

  export type Productos_CySMaxAggregateInputType = {
    Id?: true
    costo?: true
    stock?: true
    producto?: true
    emprendimiento?: true
  }

  export type Productos_CySCountAggregateInputType = {
    Id?: true
    costo?: true
    stock?: true
    producto?: true
    emprendimiento?: true
    _all?: true
  }

  export type Productos_CySAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos_CyS to aggregate.
     */
    where?: Productos_CySWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos_CyS to fetch.
     */
    orderBy?: Productos_CySOrderByWithRelationInput | Productos_CySOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Productos_CySWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos_CyS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos_CyS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos_CyS
    **/
    _count?: true | Productos_CySCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Productos_CySAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Productos_CySSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Productos_CySMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Productos_CySMaxAggregateInputType
  }

  export type GetProductos_CySAggregateType<T extends Productos_CySAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos_CyS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos_CyS[P]>
      : GetScalarType<T[P], AggregateProductos_CyS[P]>
  }




  export type Productos_CySGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Productos_CySWhereInput
    orderBy?: Productos_CySOrderByWithAggregationInput | Productos_CySOrderByWithAggregationInput[]
    by: Productos_CySScalarFieldEnum[] | Productos_CySScalarFieldEnum
    having?: Productos_CySScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Productos_CySCountAggregateInputType | true
    _avg?: Productos_CySAvgAggregateInputType
    _sum?: Productos_CySSumAggregateInputType
    _min?: Productos_CySMinAggregateInputType
    _max?: Productos_CySMaxAggregateInputType
  }

  export type Productos_CySGroupByOutputType = {
    Id: number
    costo: string | null
    stock: number | null
    producto: string
    emprendimiento: number
    _count: Productos_CySCountAggregateOutputType | null
    _avg: Productos_CySAvgAggregateOutputType | null
    _sum: Productos_CySSumAggregateOutputType | null
    _min: Productos_CySMinAggregateOutputType | null
    _max: Productos_CySMaxAggregateOutputType | null
  }

  type GetProductos_CySGroupByPayload<T extends Productos_CySGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Productos_CySGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Productos_CySGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Productos_CySGroupByOutputType[P]>
            : GetScalarType<T[P], Productos_CySGroupByOutputType[P]>
        }
      >
    >


  export type Productos_CySSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    costo?: boolean
    stock?: boolean
    producto?: boolean
    emprendimiento?: boolean
    rela_Prod?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos_CyS"]>

  export type Productos_CySSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    costo?: boolean
    stock?: boolean
    producto?: boolean
    emprendimiento?: boolean
    rela_Prod?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos_CyS"]>

  export type Productos_CySSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    costo?: boolean
    stock?: boolean
    producto?: boolean
    emprendimiento?: boolean
    rela_Prod?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos_CyS"]>

  export type Productos_CySSelectScalar = {
    Id?: boolean
    costo?: boolean
    stock?: boolean
    producto?: boolean
    emprendimiento?: boolean
  }

  export type Productos_CySOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "costo" | "stock" | "producto" | "emprendimiento", ExtArgs["result"]["productos_CyS"]>
  export type Productos_CySInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_Prod?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }
  export type Productos_CySIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_Prod?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }
  export type Productos_CySIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_Prod?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }

  export type $Productos_CySPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Productos_CyS"
    objects: {
      rela_Prod: Prisma.$ProductosPayload<ExtArgs>
      rela_Emp: Prisma.$EmprendimientoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      costo: string | null
      stock: number | null
      producto: string
      emprendimiento: number
    }, ExtArgs["result"]["productos_CyS"]>
    composites: {}
  }

  type Productos_CySGetPayload<S extends boolean | null | undefined | Productos_CySDefaultArgs> = $Result.GetResult<Prisma.$Productos_CySPayload, S>

  type Productos_CySCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Productos_CySFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Productos_CySCountAggregateInputType | true
    }

  export interface Productos_CySDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Productos_CyS'], meta: { name: 'Productos_CyS' } }
    /**
     * Find zero or one Productos_CyS that matches the filter.
     * @param {Productos_CySFindUniqueArgs} args - Arguments to find a Productos_CyS
     * @example
     * // Get one Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Productos_CySFindUniqueArgs>(args: SelectSubset<T, Productos_CySFindUniqueArgs<ExtArgs>>): Prisma__Productos_CySClient<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos_CyS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Productos_CySFindUniqueOrThrowArgs} args - Arguments to find a Productos_CyS
     * @example
     * // Get one Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Productos_CySFindUniqueOrThrowArgs>(args: SelectSubset<T, Productos_CySFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Productos_CySClient<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos_CyS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Productos_CySFindFirstArgs} args - Arguments to find a Productos_CyS
     * @example
     * // Get one Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Productos_CySFindFirstArgs>(args?: SelectSubset<T, Productos_CySFindFirstArgs<ExtArgs>>): Prisma__Productos_CySClient<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos_CyS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Productos_CySFindFirstOrThrowArgs} args - Arguments to find a Productos_CyS
     * @example
     * // Get one Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Productos_CySFindFirstOrThrowArgs>(args?: SelectSubset<T, Productos_CySFindFirstOrThrowArgs<ExtArgs>>): Prisma__Productos_CySClient<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos_CyS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Productos_CySFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.findMany()
     * 
     * // Get first 10 Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const productos_CySWithIdOnly = await prisma.productos_CyS.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Productos_CySFindManyArgs>(args?: SelectSubset<T, Productos_CySFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos_CyS.
     * @param {Productos_CySCreateArgs} args - Arguments to create a Productos_CyS.
     * @example
     * // Create one Productos_CyS
     * const Productos_CyS = await prisma.productos_CyS.create({
     *   data: {
     *     // ... data to create a Productos_CyS
     *   }
     * })
     * 
     */
    create<T extends Productos_CySCreateArgs>(args: SelectSubset<T, Productos_CySCreateArgs<ExtArgs>>): Prisma__Productos_CySClient<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos_CyS.
     * @param {Productos_CySCreateManyArgs} args - Arguments to create many Productos_CyS.
     * @example
     * // Create many Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Productos_CySCreateManyArgs>(args?: SelectSubset<T, Productos_CySCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos_CyS and returns the data saved in the database.
     * @param {Productos_CySCreateManyAndReturnArgs} args - Arguments to create many Productos_CyS.
     * @example
     * // Create many Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos_CyS and only return the `Id`
     * const productos_CySWithIdOnly = await prisma.productos_CyS.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Productos_CySCreateManyAndReturnArgs>(args?: SelectSubset<T, Productos_CySCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productos_CyS.
     * @param {Productos_CySDeleteArgs} args - Arguments to delete one Productos_CyS.
     * @example
     * // Delete one Productos_CyS
     * const Productos_CyS = await prisma.productos_CyS.delete({
     *   where: {
     *     // ... filter to delete one Productos_CyS
     *   }
     * })
     * 
     */
    delete<T extends Productos_CySDeleteArgs>(args: SelectSubset<T, Productos_CySDeleteArgs<ExtArgs>>): Prisma__Productos_CySClient<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos_CyS.
     * @param {Productos_CySUpdateArgs} args - Arguments to update one Productos_CyS.
     * @example
     * // Update one Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Productos_CySUpdateArgs>(args: SelectSubset<T, Productos_CySUpdateArgs<ExtArgs>>): Prisma__Productos_CySClient<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos_CyS.
     * @param {Productos_CySDeleteManyArgs} args - Arguments to filter Productos_CyS to delete.
     * @example
     * // Delete a few Productos_CyS
     * const { count } = await prisma.productos_CyS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Productos_CySDeleteManyArgs>(args?: SelectSubset<T, Productos_CySDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos_CyS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Productos_CySUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Productos_CySUpdateManyArgs>(args: SelectSubset<T, Productos_CySUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos_CyS and returns the data updated in the database.
     * @param {Productos_CySUpdateManyAndReturnArgs} args - Arguments to update many Productos_CyS.
     * @example
     * // Update many Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos_CyS and only return the `Id`
     * const productos_CySWithIdOnly = await prisma.productos_CyS.updateManyAndReturn({
     *   select: { Id: true },
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
    updateManyAndReturn<T extends Productos_CySUpdateManyAndReturnArgs>(args: SelectSubset<T, Productos_CySUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productos_CyS.
     * @param {Productos_CySUpsertArgs} args - Arguments to update or create a Productos_CyS.
     * @example
     * // Update or create a Productos_CyS
     * const productos_CyS = await prisma.productos_CyS.upsert({
     *   create: {
     *     // ... data to create a Productos_CyS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos_CyS we want to update
     *   }
     * })
     */
    upsert<T extends Productos_CySUpsertArgs>(args: SelectSubset<T, Productos_CySUpsertArgs<ExtArgs>>): Prisma__Productos_CySClient<$Result.GetResult<Prisma.$Productos_CySPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos_CyS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Productos_CySCountArgs} args - Arguments to filter Productos_CyS to count.
     * @example
     * // Count the number of Productos_CyS
     * const count = await prisma.productos_CyS.count({
     *   where: {
     *     // ... the filter for the Productos_CyS we want to count
     *   }
     * })
    **/
    count<T extends Productos_CySCountArgs>(
      args?: Subset<T, Productos_CySCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Productos_CySCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos_CyS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Productos_CySAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Productos_CySAggregateArgs>(args: Subset<T, Productos_CySAggregateArgs>): Prisma.PrismaPromise<GetProductos_CySAggregateType<T>>

    /**
     * Group by Productos_CyS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Productos_CySGroupByArgs} args - Group by arguments.
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
      T extends Productos_CySGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Productos_CySGroupByArgs['orderBy'] }
        : { orderBy?: Productos_CySGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Productos_CySGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductos_CySGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Productos_CyS model
   */
  readonly fields: Productos_CySFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Productos_CyS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Productos_CySClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rela_Prod<T extends ProductosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductosDefaultArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rela_Emp<T extends EmprendimientoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmprendimientoDefaultArgs<ExtArgs>>): Prisma__EmprendimientoClient<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Productos_CyS model
   */
  interface Productos_CySFieldRefs {
    readonly Id: FieldRef<"Productos_CyS", 'Int'>
    readonly costo: FieldRef<"Productos_CyS", 'String'>
    readonly stock: FieldRef<"Productos_CyS", 'Int'>
    readonly producto: FieldRef<"Productos_CyS", 'String'>
    readonly emprendimiento: FieldRef<"Productos_CyS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Productos_CyS findUnique
   */
  export type Productos_CySFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    /**
     * Filter, which Productos_CyS to fetch.
     */
    where: Productos_CySWhereUniqueInput
  }

  /**
   * Productos_CyS findUniqueOrThrow
   */
  export type Productos_CySFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    /**
     * Filter, which Productos_CyS to fetch.
     */
    where: Productos_CySWhereUniqueInput
  }

  /**
   * Productos_CyS findFirst
   */
  export type Productos_CySFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    /**
     * Filter, which Productos_CyS to fetch.
     */
    where?: Productos_CySWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos_CyS to fetch.
     */
    orderBy?: Productos_CySOrderByWithRelationInput | Productos_CySOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos_CyS.
     */
    cursor?: Productos_CySWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos_CyS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos_CyS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos_CyS.
     */
    distinct?: Productos_CySScalarFieldEnum | Productos_CySScalarFieldEnum[]
  }

  /**
   * Productos_CyS findFirstOrThrow
   */
  export type Productos_CySFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    /**
     * Filter, which Productos_CyS to fetch.
     */
    where?: Productos_CySWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos_CyS to fetch.
     */
    orderBy?: Productos_CySOrderByWithRelationInput | Productos_CySOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos_CyS.
     */
    cursor?: Productos_CySWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos_CyS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos_CyS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos_CyS.
     */
    distinct?: Productos_CySScalarFieldEnum | Productos_CySScalarFieldEnum[]
  }

  /**
   * Productos_CyS findMany
   */
  export type Productos_CySFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    /**
     * Filter, which Productos_CyS to fetch.
     */
    where?: Productos_CySWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos_CyS to fetch.
     */
    orderBy?: Productos_CySOrderByWithRelationInput | Productos_CySOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos_CyS.
     */
    cursor?: Productos_CySWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos_CyS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos_CyS.
     */
    skip?: number
    distinct?: Productos_CySScalarFieldEnum | Productos_CySScalarFieldEnum[]
  }

  /**
   * Productos_CyS create
   */
  export type Productos_CySCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    /**
     * The data needed to create a Productos_CyS.
     */
    data: XOR<Productos_CySCreateInput, Productos_CySUncheckedCreateInput>
  }

  /**
   * Productos_CyS createMany
   */
  export type Productos_CySCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos_CyS.
     */
    data: Productos_CySCreateManyInput | Productos_CySCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Productos_CyS createManyAndReturn
   */
  export type Productos_CySCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * The data used to create many Productos_CyS.
     */
    data: Productos_CySCreateManyInput | Productos_CySCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Productos_CyS update
   */
  export type Productos_CySUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    /**
     * The data needed to update a Productos_CyS.
     */
    data: XOR<Productos_CySUpdateInput, Productos_CySUncheckedUpdateInput>
    /**
     * Choose, which Productos_CyS to update.
     */
    where: Productos_CySWhereUniqueInput
  }

  /**
   * Productos_CyS updateMany
   */
  export type Productos_CySUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos_CyS.
     */
    data: XOR<Productos_CySUpdateManyMutationInput, Productos_CySUncheckedUpdateManyInput>
    /**
     * Filter which Productos_CyS to update
     */
    where?: Productos_CySWhereInput
    /**
     * Limit how many Productos_CyS to update.
     */
    limit?: number
  }

  /**
   * Productos_CyS updateManyAndReturn
   */
  export type Productos_CySUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * The data used to update Productos_CyS.
     */
    data: XOR<Productos_CySUpdateManyMutationInput, Productos_CySUncheckedUpdateManyInput>
    /**
     * Filter which Productos_CyS to update
     */
    where?: Productos_CySWhereInput
    /**
     * Limit how many Productos_CyS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Productos_CyS upsert
   */
  export type Productos_CySUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    /**
     * The filter to search for the Productos_CyS to update in case it exists.
     */
    where: Productos_CySWhereUniqueInput
    /**
     * In case the Productos_CyS found by the `where` argument doesn't exist, create a new Productos_CyS with this data.
     */
    create: XOR<Productos_CySCreateInput, Productos_CySUncheckedCreateInput>
    /**
     * In case the Productos_CyS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Productos_CySUpdateInput, Productos_CySUncheckedUpdateInput>
  }

  /**
   * Productos_CyS delete
   */
  export type Productos_CySDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
    /**
     * Filter which Productos_CyS to delete.
     */
    where: Productos_CySWhereUniqueInput
  }

  /**
   * Productos_CyS deleteMany
   */
  export type Productos_CySDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos_CyS to delete
     */
    where?: Productos_CySWhereInput
    /**
     * Limit how many Productos_CyS to delete.
     */
    limit?: number
  }

  /**
   * Productos_CyS without action
   */
  export type Productos_CySDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos_CyS
     */
    select?: Productos_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos_CyS
     */
    omit?: Productos_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Productos_CySInclude<ExtArgs> | null
  }


  /**
   * Model Prod_Mat
   */

  export type AggregateProd_Mat = {
    _count: Prod_MatCountAggregateOutputType | null
    _avg: Prod_MatAvgAggregateOutputType | null
    _sum: Prod_MatSumAggregateOutputType | null
    _min: Prod_MatMinAggregateOutputType | null
    _max: Prod_MatMaxAggregateOutputType | null
  }

  export type Prod_MatAvgAggregateOutputType = {
    Id: number | null
  }

  export type Prod_MatSumAggregateOutputType = {
    Id: number | null
  }

  export type Prod_MatMinAggregateOutputType = {
    Id: number | null
    cantidad: string | null
    producto: string | null
    materiales: string | null
  }

  export type Prod_MatMaxAggregateOutputType = {
    Id: number | null
    cantidad: string | null
    producto: string | null
    materiales: string | null
  }

  export type Prod_MatCountAggregateOutputType = {
    Id: number
    cantidad: number
    producto: number
    materiales: number
    _all: number
  }


  export type Prod_MatAvgAggregateInputType = {
    Id?: true
  }

  export type Prod_MatSumAggregateInputType = {
    Id?: true
  }

  export type Prod_MatMinAggregateInputType = {
    Id?: true
    cantidad?: true
    producto?: true
    materiales?: true
  }

  export type Prod_MatMaxAggregateInputType = {
    Id?: true
    cantidad?: true
    producto?: true
    materiales?: true
  }

  export type Prod_MatCountAggregateInputType = {
    Id?: true
    cantidad?: true
    producto?: true
    materiales?: true
    _all?: true
  }

  export type Prod_MatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prod_Mat to aggregate.
     */
    where?: Prod_MatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prod_Mats to fetch.
     */
    orderBy?: Prod_MatOrderByWithRelationInput | Prod_MatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Prod_MatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prod_Mats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prod_Mats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prod_Mats
    **/
    _count?: true | Prod_MatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prod_MatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prod_MatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prod_MatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prod_MatMaxAggregateInputType
  }

  export type GetProd_MatAggregateType<T extends Prod_MatAggregateArgs> = {
        [P in keyof T & keyof AggregateProd_Mat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProd_Mat[P]>
      : GetScalarType<T[P], AggregateProd_Mat[P]>
  }




  export type Prod_MatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Prod_MatWhereInput
    orderBy?: Prod_MatOrderByWithAggregationInput | Prod_MatOrderByWithAggregationInput[]
    by: Prod_MatScalarFieldEnum[] | Prod_MatScalarFieldEnum
    having?: Prod_MatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prod_MatCountAggregateInputType | true
    _avg?: Prod_MatAvgAggregateInputType
    _sum?: Prod_MatSumAggregateInputType
    _min?: Prod_MatMinAggregateInputType
    _max?: Prod_MatMaxAggregateInputType
  }

  export type Prod_MatGroupByOutputType = {
    Id: number
    cantidad: string
    producto: string
    materiales: string
    _count: Prod_MatCountAggregateOutputType | null
    _avg: Prod_MatAvgAggregateOutputType | null
    _sum: Prod_MatSumAggregateOutputType | null
    _min: Prod_MatMinAggregateOutputType | null
    _max: Prod_MatMaxAggregateOutputType | null
  }

  type GetProd_MatGroupByPayload<T extends Prod_MatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prod_MatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prod_MatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prod_MatGroupByOutputType[P]>
            : GetScalarType<T[P], Prod_MatGroupByOutputType[P]>
        }
      >
    >


  export type Prod_MatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    cantidad?: boolean
    producto?: boolean
    materiales?: boolean
    rela_PyM?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_MyP?: boolean | MaterialesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prod_Mat"]>

  export type Prod_MatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    cantidad?: boolean
    producto?: boolean
    materiales?: boolean
    rela_PyM?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_MyP?: boolean | MaterialesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prod_Mat"]>

  export type Prod_MatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    cantidad?: boolean
    producto?: boolean
    materiales?: boolean
    rela_PyM?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_MyP?: boolean | MaterialesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prod_Mat"]>

  export type Prod_MatSelectScalar = {
    Id?: boolean
    cantidad?: boolean
    producto?: boolean
    materiales?: boolean
  }

  export type Prod_MatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "cantidad" | "producto" | "materiales", ExtArgs["result"]["prod_Mat"]>
  export type Prod_MatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_PyM?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_MyP?: boolean | MaterialesDefaultArgs<ExtArgs>
  }
  export type Prod_MatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_PyM?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_MyP?: boolean | MaterialesDefaultArgs<ExtArgs>
  }
  export type Prod_MatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_PyM?: boolean | ProductosDefaultArgs<ExtArgs>
    rela_MyP?: boolean | MaterialesDefaultArgs<ExtArgs>
  }

  export type $Prod_MatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prod_Mat"
    objects: {
      rela_PyM: Prisma.$ProductosPayload<ExtArgs>
      rela_MyP: Prisma.$MaterialesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      cantidad: string
      producto: string
      materiales: string
    }, ExtArgs["result"]["prod_Mat"]>
    composites: {}
  }

  type Prod_MatGetPayload<S extends boolean | null | undefined | Prod_MatDefaultArgs> = $Result.GetResult<Prisma.$Prod_MatPayload, S>

  type Prod_MatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Prod_MatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prod_MatCountAggregateInputType | true
    }

  export interface Prod_MatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prod_Mat'], meta: { name: 'Prod_Mat' } }
    /**
     * Find zero or one Prod_Mat that matches the filter.
     * @param {Prod_MatFindUniqueArgs} args - Arguments to find a Prod_Mat
     * @example
     * // Get one Prod_Mat
     * const prod_Mat = await prisma.prod_Mat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Prod_MatFindUniqueArgs>(args: SelectSubset<T, Prod_MatFindUniqueArgs<ExtArgs>>): Prisma__Prod_MatClient<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prod_Mat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Prod_MatFindUniqueOrThrowArgs} args - Arguments to find a Prod_Mat
     * @example
     * // Get one Prod_Mat
     * const prod_Mat = await prisma.prod_Mat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Prod_MatFindUniqueOrThrowArgs>(args: SelectSubset<T, Prod_MatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Prod_MatClient<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prod_Mat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prod_MatFindFirstArgs} args - Arguments to find a Prod_Mat
     * @example
     * // Get one Prod_Mat
     * const prod_Mat = await prisma.prod_Mat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Prod_MatFindFirstArgs>(args?: SelectSubset<T, Prod_MatFindFirstArgs<ExtArgs>>): Prisma__Prod_MatClient<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prod_Mat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prod_MatFindFirstOrThrowArgs} args - Arguments to find a Prod_Mat
     * @example
     * // Get one Prod_Mat
     * const prod_Mat = await prisma.prod_Mat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Prod_MatFindFirstOrThrowArgs>(args?: SelectSubset<T, Prod_MatFindFirstOrThrowArgs<ExtArgs>>): Prisma__Prod_MatClient<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prod_Mats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prod_MatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prod_Mats
     * const prod_Mats = await prisma.prod_Mat.findMany()
     * 
     * // Get first 10 Prod_Mats
     * const prod_Mats = await prisma.prod_Mat.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const prod_MatWithIdOnly = await prisma.prod_Mat.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Prod_MatFindManyArgs>(args?: SelectSubset<T, Prod_MatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prod_Mat.
     * @param {Prod_MatCreateArgs} args - Arguments to create a Prod_Mat.
     * @example
     * // Create one Prod_Mat
     * const Prod_Mat = await prisma.prod_Mat.create({
     *   data: {
     *     // ... data to create a Prod_Mat
     *   }
     * })
     * 
     */
    create<T extends Prod_MatCreateArgs>(args: SelectSubset<T, Prod_MatCreateArgs<ExtArgs>>): Prisma__Prod_MatClient<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prod_Mats.
     * @param {Prod_MatCreateManyArgs} args - Arguments to create many Prod_Mats.
     * @example
     * // Create many Prod_Mats
     * const prod_Mat = await prisma.prod_Mat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Prod_MatCreateManyArgs>(args?: SelectSubset<T, Prod_MatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prod_Mats and returns the data saved in the database.
     * @param {Prod_MatCreateManyAndReturnArgs} args - Arguments to create many Prod_Mats.
     * @example
     * // Create many Prod_Mats
     * const prod_Mat = await prisma.prod_Mat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prod_Mats and only return the `Id`
     * const prod_MatWithIdOnly = await prisma.prod_Mat.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Prod_MatCreateManyAndReturnArgs>(args?: SelectSubset<T, Prod_MatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prod_Mat.
     * @param {Prod_MatDeleteArgs} args - Arguments to delete one Prod_Mat.
     * @example
     * // Delete one Prod_Mat
     * const Prod_Mat = await prisma.prod_Mat.delete({
     *   where: {
     *     // ... filter to delete one Prod_Mat
     *   }
     * })
     * 
     */
    delete<T extends Prod_MatDeleteArgs>(args: SelectSubset<T, Prod_MatDeleteArgs<ExtArgs>>): Prisma__Prod_MatClient<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prod_Mat.
     * @param {Prod_MatUpdateArgs} args - Arguments to update one Prod_Mat.
     * @example
     * // Update one Prod_Mat
     * const prod_Mat = await prisma.prod_Mat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Prod_MatUpdateArgs>(args: SelectSubset<T, Prod_MatUpdateArgs<ExtArgs>>): Prisma__Prod_MatClient<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prod_Mats.
     * @param {Prod_MatDeleteManyArgs} args - Arguments to filter Prod_Mats to delete.
     * @example
     * // Delete a few Prod_Mats
     * const { count } = await prisma.prod_Mat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Prod_MatDeleteManyArgs>(args?: SelectSubset<T, Prod_MatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prod_Mats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prod_MatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prod_Mats
     * const prod_Mat = await prisma.prod_Mat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Prod_MatUpdateManyArgs>(args: SelectSubset<T, Prod_MatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prod_Mats and returns the data updated in the database.
     * @param {Prod_MatUpdateManyAndReturnArgs} args - Arguments to update many Prod_Mats.
     * @example
     * // Update many Prod_Mats
     * const prod_Mat = await prisma.prod_Mat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prod_Mats and only return the `Id`
     * const prod_MatWithIdOnly = await prisma.prod_Mat.updateManyAndReturn({
     *   select: { Id: true },
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
    updateManyAndReturn<T extends Prod_MatUpdateManyAndReturnArgs>(args: SelectSubset<T, Prod_MatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prod_Mat.
     * @param {Prod_MatUpsertArgs} args - Arguments to update or create a Prod_Mat.
     * @example
     * // Update or create a Prod_Mat
     * const prod_Mat = await prisma.prod_Mat.upsert({
     *   create: {
     *     // ... data to create a Prod_Mat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prod_Mat we want to update
     *   }
     * })
     */
    upsert<T extends Prod_MatUpsertArgs>(args: SelectSubset<T, Prod_MatUpsertArgs<ExtArgs>>): Prisma__Prod_MatClient<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prod_Mats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prod_MatCountArgs} args - Arguments to filter Prod_Mats to count.
     * @example
     * // Count the number of Prod_Mats
     * const count = await prisma.prod_Mat.count({
     *   where: {
     *     // ... the filter for the Prod_Mats we want to count
     *   }
     * })
    **/
    count<T extends Prod_MatCountArgs>(
      args?: Subset<T, Prod_MatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prod_MatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prod_Mat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prod_MatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Prod_MatAggregateArgs>(args: Subset<T, Prod_MatAggregateArgs>): Prisma.PrismaPromise<GetProd_MatAggregateType<T>>

    /**
     * Group by Prod_Mat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prod_MatGroupByArgs} args - Group by arguments.
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
      T extends Prod_MatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Prod_MatGroupByArgs['orderBy'] }
        : { orderBy?: Prod_MatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Prod_MatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProd_MatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prod_Mat model
   */
  readonly fields: Prod_MatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prod_Mat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Prod_MatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rela_PyM<T extends ProductosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductosDefaultArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rela_MyP<T extends MaterialesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialesDefaultArgs<ExtArgs>>): Prisma__MaterialesClient<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prod_Mat model
   */
  interface Prod_MatFieldRefs {
    readonly Id: FieldRef<"Prod_Mat", 'Int'>
    readonly cantidad: FieldRef<"Prod_Mat", 'String'>
    readonly producto: FieldRef<"Prod_Mat", 'String'>
    readonly materiales: FieldRef<"Prod_Mat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prod_Mat findUnique
   */
  export type Prod_MatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    /**
     * Filter, which Prod_Mat to fetch.
     */
    where: Prod_MatWhereUniqueInput
  }

  /**
   * Prod_Mat findUniqueOrThrow
   */
  export type Prod_MatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    /**
     * Filter, which Prod_Mat to fetch.
     */
    where: Prod_MatWhereUniqueInput
  }

  /**
   * Prod_Mat findFirst
   */
  export type Prod_MatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    /**
     * Filter, which Prod_Mat to fetch.
     */
    where?: Prod_MatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prod_Mats to fetch.
     */
    orderBy?: Prod_MatOrderByWithRelationInput | Prod_MatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prod_Mats.
     */
    cursor?: Prod_MatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prod_Mats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prod_Mats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prod_Mats.
     */
    distinct?: Prod_MatScalarFieldEnum | Prod_MatScalarFieldEnum[]
  }

  /**
   * Prod_Mat findFirstOrThrow
   */
  export type Prod_MatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    /**
     * Filter, which Prod_Mat to fetch.
     */
    where?: Prod_MatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prod_Mats to fetch.
     */
    orderBy?: Prod_MatOrderByWithRelationInput | Prod_MatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prod_Mats.
     */
    cursor?: Prod_MatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prod_Mats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prod_Mats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prod_Mats.
     */
    distinct?: Prod_MatScalarFieldEnum | Prod_MatScalarFieldEnum[]
  }

  /**
   * Prod_Mat findMany
   */
  export type Prod_MatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    /**
     * Filter, which Prod_Mats to fetch.
     */
    where?: Prod_MatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prod_Mats to fetch.
     */
    orderBy?: Prod_MatOrderByWithRelationInput | Prod_MatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prod_Mats.
     */
    cursor?: Prod_MatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prod_Mats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prod_Mats.
     */
    skip?: number
    distinct?: Prod_MatScalarFieldEnum | Prod_MatScalarFieldEnum[]
  }

  /**
   * Prod_Mat create
   */
  export type Prod_MatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    /**
     * The data needed to create a Prod_Mat.
     */
    data: XOR<Prod_MatCreateInput, Prod_MatUncheckedCreateInput>
  }

  /**
   * Prod_Mat createMany
   */
  export type Prod_MatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prod_Mats.
     */
    data: Prod_MatCreateManyInput | Prod_MatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prod_Mat createManyAndReturn
   */
  export type Prod_MatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * The data used to create many Prod_Mats.
     */
    data: Prod_MatCreateManyInput | Prod_MatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prod_Mat update
   */
  export type Prod_MatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    /**
     * The data needed to update a Prod_Mat.
     */
    data: XOR<Prod_MatUpdateInput, Prod_MatUncheckedUpdateInput>
    /**
     * Choose, which Prod_Mat to update.
     */
    where: Prod_MatWhereUniqueInput
  }

  /**
   * Prod_Mat updateMany
   */
  export type Prod_MatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prod_Mats.
     */
    data: XOR<Prod_MatUpdateManyMutationInput, Prod_MatUncheckedUpdateManyInput>
    /**
     * Filter which Prod_Mats to update
     */
    where?: Prod_MatWhereInput
    /**
     * Limit how many Prod_Mats to update.
     */
    limit?: number
  }

  /**
   * Prod_Mat updateManyAndReturn
   */
  export type Prod_MatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * The data used to update Prod_Mats.
     */
    data: XOR<Prod_MatUpdateManyMutationInput, Prod_MatUncheckedUpdateManyInput>
    /**
     * Filter which Prod_Mats to update
     */
    where?: Prod_MatWhereInput
    /**
     * Limit how many Prod_Mats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prod_Mat upsert
   */
  export type Prod_MatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    /**
     * The filter to search for the Prod_Mat to update in case it exists.
     */
    where: Prod_MatWhereUniqueInput
    /**
     * In case the Prod_Mat found by the `where` argument doesn't exist, create a new Prod_Mat with this data.
     */
    create: XOR<Prod_MatCreateInput, Prod_MatUncheckedCreateInput>
    /**
     * In case the Prod_Mat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Prod_MatUpdateInput, Prod_MatUncheckedUpdateInput>
  }

  /**
   * Prod_Mat delete
   */
  export type Prod_MatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    /**
     * Filter which Prod_Mat to delete.
     */
    where: Prod_MatWhereUniqueInput
  }

  /**
   * Prod_Mat deleteMany
   */
  export type Prod_MatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prod_Mats to delete
     */
    where?: Prod_MatWhereInput
    /**
     * Limit how many Prod_Mats to delete.
     */
    limit?: number
  }

  /**
   * Prod_Mat without action
   */
  export type Prod_MatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
  }


  /**
   * Model Materiales
   */

  export type AggregateMateriales = {
    _count: MaterialesCountAggregateOutputType | null
    _min: MaterialesMinAggregateOutputType | null
    _max: MaterialesMaxAggregateOutputType | null
  }

  export type MaterialesMinAggregateOutputType = {
    nombreMat: string | null
    unidad: string | null
    foto: string | null
  }

  export type MaterialesMaxAggregateOutputType = {
    nombreMat: string | null
    unidad: string | null
    foto: string | null
  }

  export type MaterialesCountAggregateOutputType = {
    nombreMat: number
    unidad: number
    foto: number
    _all: number
  }


  export type MaterialesMinAggregateInputType = {
    nombreMat?: true
    unidad?: true
    foto?: true
  }

  export type MaterialesMaxAggregateInputType = {
    nombreMat?: true
    unidad?: true
    foto?: true
  }

  export type MaterialesCountAggregateInputType = {
    nombreMat?: true
    unidad?: true
    foto?: true
    _all?: true
  }

  export type MaterialesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materiales to aggregate.
     */
    where?: MaterialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materiales to fetch.
     */
    orderBy?: MaterialesOrderByWithRelationInput | MaterialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materiales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materiales
    **/
    _count?: true | MaterialesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialesMaxAggregateInputType
  }

  export type GetMaterialesAggregateType<T extends MaterialesAggregateArgs> = {
        [P in keyof T & keyof AggregateMateriales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateriales[P]>
      : GetScalarType<T[P], AggregateMateriales[P]>
  }




  export type MaterialesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialesWhereInput
    orderBy?: MaterialesOrderByWithAggregationInput | MaterialesOrderByWithAggregationInput[]
    by: MaterialesScalarFieldEnum[] | MaterialesScalarFieldEnum
    having?: MaterialesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialesCountAggregateInputType | true
    _min?: MaterialesMinAggregateInputType
    _max?: MaterialesMaxAggregateInputType
  }

  export type MaterialesGroupByOutputType = {
    nombreMat: string
    unidad: string
    foto: string | null
    _count: MaterialesCountAggregateOutputType | null
    _min: MaterialesMinAggregateOutputType | null
    _max: MaterialesMaxAggregateOutputType | null
  }

  type GetMaterialesGroupByPayload<T extends MaterialesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialesGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialesGroupByOutputType[P]>
        }
      >
    >


  export type MaterialesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombreMat?: boolean
    unidad?: boolean
    foto?: boolean
    prod_mat?: boolean | Materiales$prod_matArgs<ExtArgs>
    materiales_CyS?: boolean | Materiales$materiales_CySArgs<ExtArgs>
    _count?: boolean | MaterialesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiales"]>

  export type MaterialesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombreMat?: boolean
    unidad?: boolean
    foto?: boolean
  }, ExtArgs["result"]["materiales"]>

  export type MaterialesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombreMat?: boolean
    unidad?: boolean
    foto?: boolean
  }, ExtArgs["result"]["materiales"]>

  export type MaterialesSelectScalar = {
    nombreMat?: boolean
    unidad?: boolean
    foto?: boolean
  }

  export type MaterialesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nombreMat" | "unidad" | "foto", ExtArgs["result"]["materiales"]>
  export type MaterialesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prod_mat?: boolean | Materiales$prod_matArgs<ExtArgs>
    materiales_CyS?: boolean | Materiales$materiales_CySArgs<ExtArgs>
    _count?: boolean | MaterialesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaterialesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materiales"
    objects: {
      prod_mat: Prisma.$Prod_MatPayload<ExtArgs>[]
      materiales_CyS: Prisma.$Materiales_CySPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nombreMat: string
      unidad: string
      foto: string | null
    }, ExtArgs["result"]["materiales"]>
    composites: {}
  }

  type MaterialesGetPayload<S extends boolean | null | undefined | MaterialesDefaultArgs> = $Result.GetResult<Prisma.$MaterialesPayload, S>

  type MaterialesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialesCountAggregateInputType | true
    }

  export interface MaterialesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materiales'], meta: { name: 'Materiales' } }
    /**
     * Find zero or one Materiales that matches the filter.
     * @param {MaterialesFindUniqueArgs} args - Arguments to find a Materiales
     * @example
     * // Get one Materiales
     * const materiales = await prisma.materiales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialesFindUniqueArgs>(args: SelectSubset<T, MaterialesFindUniqueArgs<ExtArgs>>): Prisma__MaterialesClient<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materiales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialesFindUniqueOrThrowArgs} args - Arguments to find a Materiales
     * @example
     * // Get one Materiales
     * const materiales = await prisma.materiales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialesFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialesClient<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materiales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialesFindFirstArgs} args - Arguments to find a Materiales
     * @example
     * // Get one Materiales
     * const materiales = await prisma.materiales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialesFindFirstArgs>(args?: SelectSubset<T, MaterialesFindFirstArgs<ExtArgs>>): Prisma__MaterialesClient<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materiales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialesFindFirstOrThrowArgs} args - Arguments to find a Materiales
     * @example
     * // Get one Materiales
     * const materiales = await prisma.materiales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialesFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialesClient<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materiales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materiales
     * const materiales = await prisma.materiales.findMany()
     * 
     * // Get first 10 Materiales
     * const materiales = await prisma.materiales.findMany({ take: 10 })
     * 
     * // Only select the `nombreMat`
     * const materialesWithNombreMatOnly = await prisma.materiales.findMany({ select: { nombreMat: true } })
     * 
     */
    findMany<T extends MaterialesFindManyArgs>(args?: SelectSubset<T, MaterialesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materiales.
     * @param {MaterialesCreateArgs} args - Arguments to create a Materiales.
     * @example
     * // Create one Materiales
     * const Materiales = await prisma.materiales.create({
     *   data: {
     *     // ... data to create a Materiales
     *   }
     * })
     * 
     */
    create<T extends MaterialesCreateArgs>(args: SelectSubset<T, MaterialesCreateArgs<ExtArgs>>): Prisma__MaterialesClient<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materiales.
     * @param {MaterialesCreateManyArgs} args - Arguments to create many Materiales.
     * @example
     * // Create many Materiales
     * const materiales = await prisma.materiales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialesCreateManyArgs>(args?: SelectSubset<T, MaterialesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materiales and returns the data saved in the database.
     * @param {MaterialesCreateManyAndReturnArgs} args - Arguments to create many Materiales.
     * @example
     * // Create many Materiales
     * const materiales = await prisma.materiales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materiales and only return the `nombreMat`
     * const materialesWithNombreMatOnly = await prisma.materiales.createManyAndReturn({
     *   select: { nombreMat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialesCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materiales.
     * @param {MaterialesDeleteArgs} args - Arguments to delete one Materiales.
     * @example
     * // Delete one Materiales
     * const Materiales = await prisma.materiales.delete({
     *   where: {
     *     // ... filter to delete one Materiales
     *   }
     * })
     * 
     */
    delete<T extends MaterialesDeleteArgs>(args: SelectSubset<T, MaterialesDeleteArgs<ExtArgs>>): Prisma__MaterialesClient<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materiales.
     * @param {MaterialesUpdateArgs} args - Arguments to update one Materiales.
     * @example
     * // Update one Materiales
     * const materiales = await prisma.materiales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialesUpdateArgs>(args: SelectSubset<T, MaterialesUpdateArgs<ExtArgs>>): Prisma__MaterialesClient<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materiales.
     * @param {MaterialesDeleteManyArgs} args - Arguments to filter Materiales to delete.
     * @example
     * // Delete a few Materiales
     * const { count } = await prisma.materiales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialesDeleteManyArgs>(args?: SelectSubset<T, MaterialesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materiales
     * const materiales = await prisma.materiales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialesUpdateManyArgs>(args: SelectSubset<T, MaterialesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materiales and returns the data updated in the database.
     * @param {MaterialesUpdateManyAndReturnArgs} args - Arguments to update many Materiales.
     * @example
     * // Update many Materiales
     * const materiales = await prisma.materiales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materiales and only return the `nombreMat`
     * const materialesWithNombreMatOnly = await prisma.materiales.updateManyAndReturn({
     *   select: { nombreMat: true },
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
    updateManyAndReturn<T extends MaterialesUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materiales.
     * @param {MaterialesUpsertArgs} args - Arguments to update or create a Materiales.
     * @example
     * // Update or create a Materiales
     * const materiales = await prisma.materiales.upsert({
     *   create: {
     *     // ... data to create a Materiales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materiales we want to update
     *   }
     * })
     */
    upsert<T extends MaterialesUpsertArgs>(args: SelectSubset<T, MaterialesUpsertArgs<ExtArgs>>): Prisma__MaterialesClient<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialesCountArgs} args - Arguments to filter Materiales to count.
     * @example
     * // Count the number of Materiales
     * const count = await prisma.materiales.count({
     *   where: {
     *     // ... the filter for the Materiales we want to count
     *   }
     * })
    **/
    count<T extends MaterialesCountArgs>(
      args?: Subset<T, MaterialesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialesAggregateArgs>(args: Subset<T, MaterialesAggregateArgs>): Prisma.PrismaPromise<GetMaterialesAggregateType<T>>

    /**
     * Group by Materiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialesGroupByArgs} args - Group by arguments.
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
      T extends MaterialesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialesGroupByArgs['orderBy'] }
        : { orderBy?: MaterialesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materiales model
   */
  readonly fields: MaterialesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materiales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prod_mat<T extends Materiales$prod_matArgs<ExtArgs> = {}>(args?: Subset<T, Materiales$prod_matArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Prod_MatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materiales_CyS<T extends Materiales$materiales_CySArgs<ExtArgs> = {}>(args?: Subset<T, Materiales$materiales_CySArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Materiales model
   */
  interface MaterialesFieldRefs {
    readonly nombreMat: FieldRef<"Materiales", 'String'>
    readonly unidad: FieldRef<"Materiales", 'String'>
    readonly foto: FieldRef<"Materiales", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Materiales findUnique
   */
  export type MaterialesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialesInclude<ExtArgs> | null
    /**
     * Filter, which Materiales to fetch.
     */
    where: MaterialesWhereUniqueInput
  }

  /**
   * Materiales findUniqueOrThrow
   */
  export type MaterialesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialesInclude<ExtArgs> | null
    /**
     * Filter, which Materiales to fetch.
     */
    where: MaterialesWhereUniqueInput
  }

  /**
   * Materiales findFirst
   */
  export type MaterialesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialesInclude<ExtArgs> | null
    /**
     * Filter, which Materiales to fetch.
     */
    where?: MaterialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materiales to fetch.
     */
    orderBy?: MaterialesOrderByWithRelationInput | MaterialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materiales.
     */
    cursor?: MaterialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materiales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materiales.
     */
    distinct?: MaterialesScalarFieldEnum | MaterialesScalarFieldEnum[]
  }

  /**
   * Materiales findFirstOrThrow
   */
  export type MaterialesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialesInclude<ExtArgs> | null
    /**
     * Filter, which Materiales to fetch.
     */
    where?: MaterialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materiales to fetch.
     */
    orderBy?: MaterialesOrderByWithRelationInput | MaterialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materiales.
     */
    cursor?: MaterialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materiales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materiales.
     */
    distinct?: MaterialesScalarFieldEnum | MaterialesScalarFieldEnum[]
  }

  /**
   * Materiales findMany
   */
  export type MaterialesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialesInclude<ExtArgs> | null
    /**
     * Filter, which Materiales to fetch.
     */
    where?: MaterialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materiales to fetch.
     */
    orderBy?: MaterialesOrderByWithRelationInput | MaterialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materiales.
     */
    cursor?: MaterialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materiales.
     */
    skip?: number
    distinct?: MaterialesScalarFieldEnum | MaterialesScalarFieldEnum[]
  }

  /**
   * Materiales create
   */
  export type MaterialesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialesInclude<ExtArgs> | null
    /**
     * The data needed to create a Materiales.
     */
    data: XOR<MaterialesCreateInput, MaterialesUncheckedCreateInput>
  }

  /**
   * Materiales createMany
   */
  export type MaterialesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materiales.
     */
    data: MaterialesCreateManyInput | MaterialesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materiales createManyAndReturn
   */
  export type MaterialesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * The data used to create many Materiales.
     */
    data: MaterialesCreateManyInput | MaterialesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materiales update
   */
  export type MaterialesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialesInclude<ExtArgs> | null
    /**
     * The data needed to update a Materiales.
     */
    data: XOR<MaterialesUpdateInput, MaterialesUncheckedUpdateInput>
    /**
     * Choose, which Materiales to update.
     */
    where: MaterialesWhereUniqueInput
  }

  /**
   * Materiales updateMany
   */
  export type MaterialesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materiales.
     */
    data: XOR<MaterialesUpdateManyMutationInput, MaterialesUncheckedUpdateManyInput>
    /**
     * Filter which Materiales to update
     */
    where?: MaterialesWhereInput
    /**
     * Limit how many Materiales to update.
     */
    limit?: number
  }

  /**
   * Materiales updateManyAndReturn
   */
  export type MaterialesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * The data used to update Materiales.
     */
    data: XOR<MaterialesUpdateManyMutationInput, MaterialesUncheckedUpdateManyInput>
    /**
     * Filter which Materiales to update
     */
    where?: MaterialesWhereInput
    /**
     * Limit how many Materiales to update.
     */
    limit?: number
  }

  /**
   * Materiales upsert
   */
  export type MaterialesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialesInclude<ExtArgs> | null
    /**
     * The filter to search for the Materiales to update in case it exists.
     */
    where: MaterialesWhereUniqueInput
    /**
     * In case the Materiales found by the `where` argument doesn't exist, create a new Materiales with this data.
     */
    create: XOR<MaterialesCreateInput, MaterialesUncheckedCreateInput>
    /**
     * In case the Materiales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialesUpdateInput, MaterialesUncheckedUpdateInput>
  }

  /**
   * Materiales delete
   */
  export type MaterialesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialesInclude<ExtArgs> | null
    /**
     * Filter which Materiales to delete.
     */
    where: MaterialesWhereUniqueInput
  }

  /**
   * Materiales deleteMany
   */
  export type MaterialesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materiales to delete
     */
    where?: MaterialesWhereInput
    /**
     * Limit how many Materiales to delete.
     */
    limit?: number
  }

  /**
   * Materiales.prod_mat
   */
  export type Materiales$prod_matArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prod_Mat
     */
    select?: Prod_MatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prod_Mat
     */
    omit?: Prod_MatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prod_MatInclude<ExtArgs> | null
    where?: Prod_MatWhereInput
    orderBy?: Prod_MatOrderByWithRelationInput | Prod_MatOrderByWithRelationInput[]
    cursor?: Prod_MatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prod_MatScalarFieldEnum | Prod_MatScalarFieldEnum[]
  }

  /**
   * Materiales.materiales_CyS
   */
  export type Materiales$materiales_CySArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    where?: Materiales_CySWhereInput
    orderBy?: Materiales_CySOrderByWithRelationInput | Materiales_CySOrderByWithRelationInput[]
    cursor?: Materiales_CySWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Materiales_CySScalarFieldEnum | Materiales_CySScalarFieldEnum[]
  }

  /**
   * Materiales without action
   */
  export type MaterialesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales
     */
    select?: MaterialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales
     */
    omit?: MaterialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialesInclude<ExtArgs> | null
  }


  /**
   * Model Materiales_CyS
   */

  export type AggregateMateriales_CyS = {
    _count: Materiales_CySCountAggregateOutputType | null
    _avg: Materiales_CySAvgAggregateOutputType | null
    _sum: Materiales_CySSumAggregateOutputType | null
    _min: Materiales_CySMinAggregateOutputType | null
    _max: Materiales_CySMaxAggregateOutputType | null
  }

  export type Materiales_CySAvgAggregateOutputType = {
    Id: number | null
    stock: number | null
    emprendimiento: number | null
  }

  export type Materiales_CySSumAggregateOutputType = {
    Id: number | null
    stock: number | null
    emprendimiento: number | null
  }

  export type Materiales_CySMinAggregateOutputType = {
    Id: number | null
    costo: string | null
    stock: number | null
    materiales: string | null
    emprendimiento: number | null
  }

  export type Materiales_CySMaxAggregateOutputType = {
    Id: number | null
    costo: string | null
    stock: number | null
    materiales: string | null
    emprendimiento: number | null
  }

  export type Materiales_CySCountAggregateOutputType = {
    Id: number
    costo: number
    stock: number
    materiales: number
    emprendimiento: number
    _all: number
  }


  export type Materiales_CySAvgAggregateInputType = {
    Id?: true
    stock?: true
    emprendimiento?: true
  }

  export type Materiales_CySSumAggregateInputType = {
    Id?: true
    stock?: true
    emprendimiento?: true
  }

  export type Materiales_CySMinAggregateInputType = {
    Id?: true
    costo?: true
    stock?: true
    materiales?: true
    emprendimiento?: true
  }

  export type Materiales_CySMaxAggregateInputType = {
    Id?: true
    costo?: true
    stock?: true
    materiales?: true
    emprendimiento?: true
  }

  export type Materiales_CySCountAggregateInputType = {
    Id?: true
    costo?: true
    stock?: true
    materiales?: true
    emprendimiento?: true
    _all?: true
  }

  export type Materiales_CySAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materiales_CyS to aggregate.
     */
    where?: Materiales_CySWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materiales_CyS to fetch.
     */
    orderBy?: Materiales_CySOrderByWithRelationInput | Materiales_CySOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Materiales_CySWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materiales_CyS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materiales_CyS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materiales_CyS
    **/
    _count?: true | Materiales_CySCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Materiales_CySAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Materiales_CySSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Materiales_CySMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Materiales_CySMaxAggregateInputType
  }

  export type GetMateriales_CySAggregateType<T extends Materiales_CySAggregateArgs> = {
        [P in keyof T & keyof AggregateMateriales_CyS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateriales_CyS[P]>
      : GetScalarType<T[P], AggregateMateriales_CyS[P]>
  }




  export type Materiales_CySGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Materiales_CySWhereInput
    orderBy?: Materiales_CySOrderByWithAggregationInput | Materiales_CySOrderByWithAggregationInput[]
    by: Materiales_CySScalarFieldEnum[] | Materiales_CySScalarFieldEnum
    having?: Materiales_CySScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Materiales_CySCountAggregateInputType | true
    _avg?: Materiales_CySAvgAggregateInputType
    _sum?: Materiales_CySSumAggregateInputType
    _min?: Materiales_CySMinAggregateInputType
    _max?: Materiales_CySMaxAggregateInputType
  }

  export type Materiales_CySGroupByOutputType = {
    Id: number
    costo: string | null
    stock: number | null
    materiales: string
    emprendimiento: number
    _count: Materiales_CySCountAggregateOutputType | null
    _avg: Materiales_CySAvgAggregateOutputType | null
    _sum: Materiales_CySSumAggregateOutputType | null
    _min: Materiales_CySMinAggregateOutputType | null
    _max: Materiales_CySMaxAggregateOutputType | null
  }

  type GetMateriales_CySGroupByPayload<T extends Materiales_CySGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Materiales_CySGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Materiales_CySGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Materiales_CySGroupByOutputType[P]>
            : GetScalarType<T[P], Materiales_CySGroupByOutputType[P]>
        }
      >
    >


  export type Materiales_CySSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    costo?: boolean
    stock?: boolean
    materiales?: boolean
    emprendimiento?: boolean
    rela_Mat?: boolean | MaterialesDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiales_CyS"]>

  export type Materiales_CySSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    costo?: boolean
    stock?: boolean
    materiales?: boolean
    emprendimiento?: boolean
    rela_Mat?: boolean | MaterialesDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiales_CyS"]>

  export type Materiales_CySSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    costo?: boolean
    stock?: boolean
    materiales?: boolean
    emprendimiento?: boolean
    rela_Mat?: boolean | MaterialesDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiales_CyS"]>

  export type Materiales_CySSelectScalar = {
    Id?: boolean
    costo?: boolean
    stock?: boolean
    materiales?: boolean
    emprendimiento?: boolean
  }

  export type Materiales_CySOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "costo" | "stock" | "materiales" | "emprendimiento", ExtArgs["result"]["materiales_CyS"]>
  export type Materiales_CySInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_Mat?: boolean | MaterialesDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }
  export type Materiales_CySIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_Mat?: boolean | MaterialesDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }
  export type Materiales_CySIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rela_Mat?: boolean | MaterialesDefaultArgs<ExtArgs>
    rela_Emp?: boolean | EmprendimientoDefaultArgs<ExtArgs>
  }

  export type $Materiales_CySPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materiales_CyS"
    objects: {
      rela_Mat: Prisma.$MaterialesPayload<ExtArgs>
      rela_Emp: Prisma.$EmprendimientoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      costo: string | null
      stock: number | null
      materiales: string
      emprendimiento: number
    }, ExtArgs["result"]["materiales_CyS"]>
    composites: {}
  }

  type Materiales_CySGetPayload<S extends boolean | null | undefined | Materiales_CySDefaultArgs> = $Result.GetResult<Prisma.$Materiales_CySPayload, S>

  type Materiales_CySCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Materiales_CySFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Materiales_CySCountAggregateInputType | true
    }

  export interface Materiales_CySDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materiales_CyS'], meta: { name: 'Materiales_CyS' } }
    /**
     * Find zero or one Materiales_CyS that matches the filter.
     * @param {Materiales_CySFindUniqueArgs} args - Arguments to find a Materiales_CyS
     * @example
     * // Get one Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Materiales_CySFindUniqueArgs>(args: SelectSubset<T, Materiales_CySFindUniqueArgs<ExtArgs>>): Prisma__Materiales_CySClient<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materiales_CyS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Materiales_CySFindUniqueOrThrowArgs} args - Arguments to find a Materiales_CyS
     * @example
     * // Get one Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Materiales_CySFindUniqueOrThrowArgs>(args: SelectSubset<T, Materiales_CySFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Materiales_CySClient<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materiales_CyS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materiales_CySFindFirstArgs} args - Arguments to find a Materiales_CyS
     * @example
     * // Get one Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Materiales_CySFindFirstArgs>(args?: SelectSubset<T, Materiales_CySFindFirstArgs<ExtArgs>>): Prisma__Materiales_CySClient<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materiales_CyS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materiales_CySFindFirstOrThrowArgs} args - Arguments to find a Materiales_CyS
     * @example
     * // Get one Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Materiales_CySFindFirstOrThrowArgs>(args?: SelectSubset<T, Materiales_CySFindFirstOrThrowArgs<ExtArgs>>): Prisma__Materiales_CySClient<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materiales_CyS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materiales_CySFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.findMany()
     * 
     * // Get first 10 Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const materiales_CySWithIdOnly = await prisma.materiales_CyS.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Materiales_CySFindManyArgs>(args?: SelectSubset<T, Materiales_CySFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materiales_CyS.
     * @param {Materiales_CySCreateArgs} args - Arguments to create a Materiales_CyS.
     * @example
     * // Create one Materiales_CyS
     * const Materiales_CyS = await prisma.materiales_CyS.create({
     *   data: {
     *     // ... data to create a Materiales_CyS
     *   }
     * })
     * 
     */
    create<T extends Materiales_CySCreateArgs>(args: SelectSubset<T, Materiales_CySCreateArgs<ExtArgs>>): Prisma__Materiales_CySClient<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materiales_CyS.
     * @param {Materiales_CySCreateManyArgs} args - Arguments to create many Materiales_CyS.
     * @example
     * // Create many Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Materiales_CySCreateManyArgs>(args?: SelectSubset<T, Materiales_CySCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materiales_CyS and returns the data saved in the database.
     * @param {Materiales_CySCreateManyAndReturnArgs} args - Arguments to create many Materiales_CyS.
     * @example
     * // Create many Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materiales_CyS and only return the `Id`
     * const materiales_CySWithIdOnly = await prisma.materiales_CyS.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Materiales_CySCreateManyAndReturnArgs>(args?: SelectSubset<T, Materiales_CySCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materiales_CyS.
     * @param {Materiales_CySDeleteArgs} args - Arguments to delete one Materiales_CyS.
     * @example
     * // Delete one Materiales_CyS
     * const Materiales_CyS = await prisma.materiales_CyS.delete({
     *   where: {
     *     // ... filter to delete one Materiales_CyS
     *   }
     * })
     * 
     */
    delete<T extends Materiales_CySDeleteArgs>(args: SelectSubset<T, Materiales_CySDeleteArgs<ExtArgs>>): Prisma__Materiales_CySClient<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materiales_CyS.
     * @param {Materiales_CySUpdateArgs} args - Arguments to update one Materiales_CyS.
     * @example
     * // Update one Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Materiales_CySUpdateArgs>(args: SelectSubset<T, Materiales_CySUpdateArgs<ExtArgs>>): Prisma__Materiales_CySClient<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materiales_CyS.
     * @param {Materiales_CySDeleteManyArgs} args - Arguments to filter Materiales_CyS to delete.
     * @example
     * // Delete a few Materiales_CyS
     * const { count } = await prisma.materiales_CyS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Materiales_CySDeleteManyArgs>(args?: SelectSubset<T, Materiales_CySDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materiales_CyS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materiales_CySUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Materiales_CySUpdateManyArgs>(args: SelectSubset<T, Materiales_CySUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materiales_CyS and returns the data updated in the database.
     * @param {Materiales_CySUpdateManyAndReturnArgs} args - Arguments to update many Materiales_CyS.
     * @example
     * // Update many Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materiales_CyS and only return the `Id`
     * const materiales_CySWithIdOnly = await prisma.materiales_CyS.updateManyAndReturn({
     *   select: { Id: true },
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
    updateManyAndReturn<T extends Materiales_CySUpdateManyAndReturnArgs>(args: SelectSubset<T, Materiales_CySUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materiales_CyS.
     * @param {Materiales_CySUpsertArgs} args - Arguments to update or create a Materiales_CyS.
     * @example
     * // Update or create a Materiales_CyS
     * const materiales_CyS = await prisma.materiales_CyS.upsert({
     *   create: {
     *     // ... data to create a Materiales_CyS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materiales_CyS we want to update
     *   }
     * })
     */
    upsert<T extends Materiales_CySUpsertArgs>(args: SelectSubset<T, Materiales_CySUpsertArgs<ExtArgs>>): Prisma__Materiales_CySClient<$Result.GetResult<Prisma.$Materiales_CySPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materiales_CyS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materiales_CySCountArgs} args - Arguments to filter Materiales_CyS to count.
     * @example
     * // Count the number of Materiales_CyS
     * const count = await prisma.materiales_CyS.count({
     *   where: {
     *     // ... the filter for the Materiales_CyS we want to count
     *   }
     * })
    **/
    count<T extends Materiales_CySCountArgs>(
      args?: Subset<T, Materiales_CySCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Materiales_CySCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materiales_CyS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materiales_CySAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Materiales_CySAggregateArgs>(args: Subset<T, Materiales_CySAggregateArgs>): Prisma.PrismaPromise<GetMateriales_CySAggregateType<T>>

    /**
     * Group by Materiales_CyS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materiales_CySGroupByArgs} args - Group by arguments.
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
      T extends Materiales_CySGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Materiales_CySGroupByArgs['orderBy'] }
        : { orderBy?: Materiales_CySGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Materiales_CySGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriales_CySGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materiales_CyS model
   */
  readonly fields: Materiales_CySFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materiales_CyS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Materiales_CySClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rela_Mat<T extends MaterialesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialesDefaultArgs<ExtArgs>>): Prisma__MaterialesClient<$Result.GetResult<Prisma.$MaterialesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rela_Emp<T extends EmprendimientoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmprendimientoDefaultArgs<ExtArgs>>): Prisma__EmprendimientoClient<$Result.GetResult<Prisma.$EmprendimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Materiales_CyS model
   */
  interface Materiales_CySFieldRefs {
    readonly Id: FieldRef<"Materiales_CyS", 'Int'>
    readonly costo: FieldRef<"Materiales_CyS", 'String'>
    readonly stock: FieldRef<"Materiales_CyS", 'Int'>
    readonly materiales: FieldRef<"Materiales_CyS", 'String'>
    readonly emprendimiento: FieldRef<"Materiales_CyS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Materiales_CyS findUnique
   */
  export type Materiales_CySFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    /**
     * Filter, which Materiales_CyS to fetch.
     */
    where: Materiales_CySWhereUniqueInput
  }

  /**
   * Materiales_CyS findUniqueOrThrow
   */
  export type Materiales_CySFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    /**
     * Filter, which Materiales_CyS to fetch.
     */
    where: Materiales_CySWhereUniqueInput
  }

  /**
   * Materiales_CyS findFirst
   */
  export type Materiales_CySFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    /**
     * Filter, which Materiales_CyS to fetch.
     */
    where?: Materiales_CySWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materiales_CyS to fetch.
     */
    orderBy?: Materiales_CySOrderByWithRelationInput | Materiales_CySOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materiales_CyS.
     */
    cursor?: Materiales_CySWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materiales_CyS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materiales_CyS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materiales_CyS.
     */
    distinct?: Materiales_CySScalarFieldEnum | Materiales_CySScalarFieldEnum[]
  }

  /**
   * Materiales_CyS findFirstOrThrow
   */
  export type Materiales_CySFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    /**
     * Filter, which Materiales_CyS to fetch.
     */
    where?: Materiales_CySWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materiales_CyS to fetch.
     */
    orderBy?: Materiales_CySOrderByWithRelationInput | Materiales_CySOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materiales_CyS.
     */
    cursor?: Materiales_CySWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materiales_CyS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materiales_CyS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materiales_CyS.
     */
    distinct?: Materiales_CySScalarFieldEnum | Materiales_CySScalarFieldEnum[]
  }

  /**
   * Materiales_CyS findMany
   */
  export type Materiales_CySFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    /**
     * Filter, which Materiales_CyS to fetch.
     */
    where?: Materiales_CySWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materiales_CyS to fetch.
     */
    orderBy?: Materiales_CySOrderByWithRelationInput | Materiales_CySOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materiales_CyS.
     */
    cursor?: Materiales_CySWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materiales_CyS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materiales_CyS.
     */
    skip?: number
    distinct?: Materiales_CySScalarFieldEnum | Materiales_CySScalarFieldEnum[]
  }

  /**
   * Materiales_CyS create
   */
  export type Materiales_CySCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    /**
     * The data needed to create a Materiales_CyS.
     */
    data: XOR<Materiales_CySCreateInput, Materiales_CySUncheckedCreateInput>
  }

  /**
   * Materiales_CyS createMany
   */
  export type Materiales_CySCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materiales_CyS.
     */
    data: Materiales_CySCreateManyInput | Materiales_CySCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materiales_CyS createManyAndReturn
   */
  export type Materiales_CySCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * The data used to create many Materiales_CyS.
     */
    data: Materiales_CySCreateManyInput | Materiales_CySCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materiales_CyS update
   */
  export type Materiales_CySUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    /**
     * The data needed to update a Materiales_CyS.
     */
    data: XOR<Materiales_CySUpdateInput, Materiales_CySUncheckedUpdateInput>
    /**
     * Choose, which Materiales_CyS to update.
     */
    where: Materiales_CySWhereUniqueInput
  }

  /**
   * Materiales_CyS updateMany
   */
  export type Materiales_CySUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materiales_CyS.
     */
    data: XOR<Materiales_CySUpdateManyMutationInput, Materiales_CySUncheckedUpdateManyInput>
    /**
     * Filter which Materiales_CyS to update
     */
    where?: Materiales_CySWhereInput
    /**
     * Limit how many Materiales_CyS to update.
     */
    limit?: number
  }

  /**
   * Materiales_CyS updateManyAndReturn
   */
  export type Materiales_CySUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * The data used to update Materiales_CyS.
     */
    data: XOR<Materiales_CySUpdateManyMutationInput, Materiales_CySUncheckedUpdateManyInput>
    /**
     * Filter which Materiales_CyS to update
     */
    where?: Materiales_CySWhereInput
    /**
     * Limit how many Materiales_CyS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materiales_CyS upsert
   */
  export type Materiales_CySUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    /**
     * The filter to search for the Materiales_CyS to update in case it exists.
     */
    where: Materiales_CySWhereUniqueInput
    /**
     * In case the Materiales_CyS found by the `where` argument doesn't exist, create a new Materiales_CyS with this data.
     */
    create: XOR<Materiales_CySCreateInput, Materiales_CySUncheckedCreateInput>
    /**
     * In case the Materiales_CyS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Materiales_CySUpdateInput, Materiales_CySUncheckedUpdateInput>
  }

  /**
   * Materiales_CyS delete
   */
  export type Materiales_CySDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
    /**
     * Filter which Materiales_CyS to delete.
     */
    where: Materiales_CySWhereUniqueInput
  }

  /**
   * Materiales_CyS deleteMany
   */
  export type Materiales_CySDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materiales_CyS to delete
     */
    where?: Materiales_CySWhereInput
    /**
     * Limit how many Materiales_CyS to delete.
     */
    limit?: number
  }

  /**
   * Materiales_CyS without action
   */
  export type Materiales_CySDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materiales_CyS
     */
    select?: Materiales_CySSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materiales_CyS
     */
    omit?: Materiales_CySOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materiales_CySInclude<ExtArgs> | null
  }


  /**
   * Model Contactos
   */

  export type AggregateContactos = {
    _count: ContactosCountAggregateOutputType | null
    _avg: ContactosAvgAggregateOutputType | null
    _sum: ContactosSumAggregateOutputType | null
    _min: ContactosMinAggregateOutputType | null
    _max: ContactosMaxAggregateOutputType | null
  }

  export type ContactosAvgAggregateOutputType = {
    Id: number | null
    telefono: number | null
  }

  export type ContactosSumAggregateOutputType = {
    Id: number | null
    telefono: number | null
  }

  export type ContactosMinAggregateOutputType = {
    Id: number | null
    nombre: string | null
    email: string | null
    telefono: number | null
    redes_soc: string | null
    notas_perz: string | null
    foto: string | null
    host: string | null
  }

  export type ContactosMaxAggregateOutputType = {
    Id: number | null
    nombre: string | null
    email: string | null
    telefono: number | null
    redes_soc: string | null
    notas_perz: string | null
    foto: string | null
    host: string | null
  }

  export type ContactosCountAggregateOutputType = {
    Id: number
    nombre: number
    email: number
    telefono: number
    redes_soc: number
    notas_perz: number
    foto: number
    host: number
    _all: number
  }


  export type ContactosAvgAggregateInputType = {
    Id?: true
    telefono?: true
  }

  export type ContactosSumAggregateInputType = {
    Id?: true
    telefono?: true
  }

  export type ContactosMinAggregateInputType = {
    Id?: true
    nombre?: true
    email?: true
    telefono?: true
    redes_soc?: true
    notas_perz?: true
    foto?: true
    host?: true
  }

  export type ContactosMaxAggregateInputType = {
    Id?: true
    nombre?: true
    email?: true
    telefono?: true
    redes_soc?: true
    notas_perz?: true
    foto?: true
    host?: true
  }

  export type ContactosCountAggregateInputType = {
    Id?: true
    nombre?: true
    email?: true
    telefono?: true
    redes_soc?: true
    notas_perz?: true
    foto?: true
    host?: true
    _all?: true
  }

  export type ContactosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contactos to aggregate.
     */
    where?: ContactosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactosOrderByWithRelationInput | ContactosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contactos
    **/
    _count?: true | ContactosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactosMaxAggregateInputType
  }

  export type GetContactosAggregateType<T extends ContactosAggregateArgs> = {
        [P in keyof T & keyof AggregateContactos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactos[P]>
      : GetScalarType<T[P], AggregateContactos[P]>
  }




  export type ContactosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactosWhereInput
    orderBy?: ContactosOrderByWithAggregationInput | ContactosOrderByWithAggregationInput[]
    by: ContactosScalarFieldEnum[] | ContactosScalarFieldEnum
    having?: ContactosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactosCountAggregateInputType | true
    _avg?: ContactosAvgAggregateInputType
    _sum?: ContactosSumAggregateInputType
    _min?: ContactosMinAggregateInputType
    _max?: ContactosMaxAggregateInputType
  }

  export type ContactosGroupByOutputType = {
    Id: number
    nombre: string
    email: string | null
    telefono: number | null
    redes_soc: string | null
    notas_perz: string | null
    foto: string | null
    host: string
    _count: ContactosCountAggregateOutputType | null
    _avg: ContactosAvgAggregateOutputType | null
    _sum: ContactosSumAggregateOutputType | null
    _min: ContactosMinAggregateOutputType | null
    _max: ContactosMaxAggregateOutputType | null
  }

  type GetContactosGroupByPayload<T extends ContactosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactosGroupByOutputType[P]>
            : GetScalarType<T[P], ContactosGroupByOutputType[P]>
        }
      >
    >


  export type ContactosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    redes_soc?: boolean
    notas_perz?: boolean
    foto?: boolean
    host?: boolean
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactos"]>

  export type ContactosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    redes_soc?: boolean
    notas_perz?: boolean
    foto?: boolean
    host?: boolean
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactos"]>

  export type ContactosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    redes_soc?: boolean
    notas_perz?: boolean
    foto?: boolean
    host?: boolean
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactos"]>

  export type ContactosSelectScalar = {
    Id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    redes_soc?: boolean
    notas_perz?: boolean
    foto?: boolean
    host?: boolean
  }

  export type ContactosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "nombre" | "email" | "telefono" | "redes_soc" | "notas_perz" | "foto" | "host", ExtArgs["result"]["contactos"]>
  export type ContactosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ContactosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ContactosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propietario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ContactosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contactos"
    objects: {
      propietario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      nombre: string
      email: string | null
      telefono: number | null
      redes_soc: string | null
      notas_perz: string | null
      foto: string | null
      host: string
    }, ExtArgs["result"]["contactos"]>
    composites: {}
  }

  type ContactosGetPayload<S extends boolean | null | undefined | ContactosDefaultArgs> = $Result.GetResult<Prisma.$ContactosPayload, S>

  type ContactosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactosCountAggregateInputType | true
    }

  export interface ContactosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contactos'], meta: { name: 'Contactos' } }
    /**
     * Find zero or one Contactos that matches the filter.
     * @param {ContactosFindUniqueArgs} args - Arguments to find a Contactos
     * @example
     * // Get one Contactos
     * const contactos = await prisma.contactos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactosFindUniqueArgs>(args: SelectSubset<T, ContactosFindUniqueArgs<ExtArgs>>): Prisma__ContactosClient<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contactos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactosFindUniqueOrThrowArgs} args - Arguments to find a Contactos
     * @example
     * // Get one Contactos
     * const contactos = await prisma.contactos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactosFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactosClient<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contactos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosFindFirstArgs} args - Arguments to find a Contactos
     * @example
     * // Get one Contactos
     * const contactos = await prisma.contactos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactosFindFirstArgs>(args?: SelectSubset<T, ContactosFindFirstArgs<ExtArgs>>): Prisma__ContactosClient<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contactos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosFindFirstOrThrowArgs} args - Arguments to find a Contactos
     * @example
     * // Get one Contactos
     * const contactos = await prisma.contactos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactosFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactosClient<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contactos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactos
     * const contactos = await prisma.contactos.findMany()
     * 
     * // Get first 10 Contactos
     * const contactos = await prisma.contactos.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const contactosWithIdOnly = await prisma.contactos.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ContactosFindManyArgs>(args?: SelectSubset<T, ContactosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contactos.
     * @param {ContactosCreateArgs} args - Arguments to create a Contactos.
     * @example
     * // Create one Contactos
     * const Contactos = await prisma.contactos.create({
     *   data: {
     *     // ... data to create a Contactos
     *   }
     * })
     * 
     */
    create<T extends ContactosCreateArgs>(args: SelectSubset<T, ContactosCreateArgs<ExtArgs>>): Prisma__ContactosClient<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contactos.
     * @param {ContactosCreateManyArgs} args - Arguments to create many Contactos.
     * @example
     * // Create many Contactos
     * const contactos = await prisma.contactos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactosCreateManyArgs>(args?: SelectSubset<T, ContactosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contactos and returns the data saved in the database.
     * @param {ContactosCreateManyAndReturnArgs} args - Arguments to create many Contactos.
     * @example
     * // Create many Contactos
     * const contactos = await prisma.contactos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contactos and only return the `Id`
     * const contactosWithIdOnly = await prisma.contactos.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactosCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contactos.
     * @param {ContactosDeleteArgs} args - Arguments to delete one Contactos.
     * @example
     * // Delete one Contactos
     * const Contactos = await prisma.contactos.delete({
     *   where: {
     *     // ... filter to delete one Contactos
     *   }
     * })
     * 
     */
    delete<T extends ContactosDeleteArgs>(args: SelectSubset<T, ContactosDeleteArgs<ExtArgs>>): Prisma__ContactosClient<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contactos.
     * @param {ContactosUpdateArgs} args - Arguments to update one Contactos.
     * @example
     * // Update one Contactos
     * const contactos = await prisma.contactos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactosUpdateArgs>(args: SelectSubset<T, ContactosUpdateArgs<ExtArgs>>): Prisma__ContactosClient<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contactos.
     * @param {ContactosDeleteManyArgs} args - Arguments to filter Contactos to delete.
     * @example
     * // Delete a few Contactos
     * const { count } = await prisma.contactos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactosDeleteManyArgs>(args?: SelectSubset<T, ContactosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactos
     * const contactos = await prisma.contactos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactosUpdateManyArgs>(args: SelectSubset<T, ContactosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos and returns the data updated in the database.
     * @param {ContactosUpdateManyAndReturnArgs} args - Arguments to update many Contactos.
     * @example
     * // Update many Contactos
     * const contactos = await prisma.contactos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contactos and only return the `Id`
     * const contactosWithIdOnly = await prisma.contactos.updateManyAndReturn({
     *   select: { Id: true },
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
    updateManyAndReturn<T extends ContactosUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contactos.
     * @param {ContactosUpsertArgs} args - Arguments to update or create a Contactos.
     * @example
     * // Update or create a Contactos
     * const contactos = await prisma.contactos.upsert({
     *   create: {
     *     // ... data to create a Contactos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contactos we want to update
     *   }
     * })
     */
    upsert<T extends ContactosUpsertArgs>(args: SelectSubset<T, ContactosUpsertArgs<ExtArgs>>): Prisma__ContactosClient<$Result.GetResult<Prisma.$ContactosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosCountArgs} args - Arguments to filter Contactos to count.
     * @example
     * // Count the number of Contactos
     * const count = await prisma.contactos.count({
     *   where: {
     *     // ... the filter for the Contactos we want to count
     *   }
     * })
    **/
    count<T extends ContactosCountArgs>(
      args?: Subset<T, ContactosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactosAggregateArgs>(args: Subset<T, ContactosAggregateArgs>): Prisma.PrismaPromise<GetContactosAggregateType<T>>

    /**
     * Group by Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactosGroupByArgs} args - Group by arguments.
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
      T extends ContactosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactosGroupByArgs['orderBy'] }
        : { orderBy?: ContactosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contactos model
   */
  readonly fields: ContactosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contactos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propietario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contactos model
   */
  interface ContactosFieldRefs {
    readonly Id: FieldRef<"Contactos", 'Int'>
    readonly nombre: FieldRef<"Contactos", 'String'>
    readonly email: FieldRef<"Contactos", 'String'>
    readonly telefono: FieldRef<"Contactos", 'Int'>
    readonly redes_soc: FieldRef<"Contactos", 'String'>
    readonly notas_perz: FieldRef<"Contactos", 'String'>
    readonly foto: FieldRef<"Contactos", 'String'>
    readonly host: FieldRef<"Contactos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contactos findUnique
   */
  export type ContactosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
    /**
     * Filter, which Contactos to fetch.
     */
    where: ContactosWhereUniqueInput
  }

  /**
   * Contactos findUniqueOrThrow
   */
  export type ContactosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
    /**
     * Filter, which Contactos to fetch.
     */
    where: ContactosWhereUniqueInput
  }

  /**
   * Contactos findFirst
   */
  export type ContactosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
    /**
     * Filter, which Contactos to fetch.
     */
    where?: ContactosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactosOrderByWithRelationInput | ContactosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactos.
     */
    cursor?: ContactosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactos.
     */
    distinct?: ContactosScalarFieldEnum | ContactosScalarFieldEnum[]
  }

  /**
   * Contactos findFirstOrThrow
   */
  export type ContactosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
    /**
     * Filter, which Contactos to fetch.
     */
    where?: ContactosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactosOrderByWithRelationInput | ContactosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactos.
     */
    cursor?: ContactosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactos.
     */
    distinct?: ContactosScalarFieldEnum | ContactosScalarFieldEnum[]
  }

  /**
   * Contactos findMany
   */
  export type ContactosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
    /**
     * Filter, which Contactos to fetch.
     */
    where?: ContactosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactosOrderByWithRelationInput | ContactosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contactos.
     */
    cursor?: ContactosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    distinct?: ContactosScalarFieldEnum | ContactosScalarFieldEnum[]
  }

  /**
   * Contactos create
   */
  export type ContactosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
    /**
     * The data needed to create a Contactos.
     */
    data: XOR<ContactosCreateInput, ContactosUncheckedCreateInput>
  }

  /**
   * Contactos createMany
   */
  export type ContactosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contactos.
     */
    data: ContactosCreateManyInput | ContactosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contactos createManyAndReturn
   */
  export type ContactosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * The data used to create many Contactos.
     */
    data: ContactosCreateManyInput | ContactosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contactos update
   */
  export type ContactosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
    /**
     * The data needed to update a Contactos.
     */
    data: XOR<ContactosUpdateInput, ContactosUncheckedUpdateInput>
    /**
     * Choose, which Contactos to update.
     */
    where: ContactosWhereUniqueInput
  }

  /**
   * Contactos updateMany
   */
  export type ContactosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contactos.
     */
    data: XOR<ContactosUpdateManyMutationInput, ContactosUncheckedUpdateManyInput>
    /**
     * Filter which Contactos to update
     */
    where?: ContactosWhereInput
    /**
     * Limit how many Contactos to update.
     */
    limit?: number
  }

  /**
   * Contactos updateManyAndReturn
   */
  export type ContactosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * The data used to update Contactos.
     */
    data: XOR<ContactosUpdateManyMutationInput, ContactosUncheckedUpdateManyInput>
    /**
     * Filter which Contactos to update
     */
    where?: ContactosWhereInput
    /**
     * Limit how many Contactos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contactos upsert
   */
  export type ContactosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
    /**
     * The filter to search for the Contactos to update in case it exists.
     */
    where: ContactosWhereUniqueInput
    /**
     * In case the Contactos found by the `where` argument doesn't exist, create a new Contactos with this data.
     */
    create: XOR<ContactosCreateInput, ContactosUncheckedCreateInput>
    /**
     * In case the Contactos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactosUpdateInput, ContactosUncheckedUpdateInput>
  }

  /**
   * Contactos delete
   */
  export type ContactosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
    /**
     * Filter which Contactos to delete.
     */
    where: ContactosWhereUniqueInput
  }

  /**
   * Contactos deleteMany
   */
  export type ContactosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contactos to delete
     */
    where?: ContactosWhereInput
    /**
     * Limit how many Contactos to delete.
     */
    limit?: number
  }

  /**
   * Contactos without action
   */
  export type ContactosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contactos
     */
    select?: ContactosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contactos
     */
    omit?: ContactosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactosInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    email: 'email',
    contasena: 'contasena',
    nombreUsu: 'nombreUsu',
    foto: 'foto'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EmprendimientoScalarFieldEnum: {
    Id: 'Id',
    nombreEmp: 'nombreEmp',
    colores: 'colores',
    usuario: 'usuario',
    tipo: 'tipo'
  };

  export type EmprendimientoScalarFieldEnum = (typeof EmprendimientoScalarFieldEnum)[keyof typeof EmprendimientoScalarFieldEnum]


  export const Typo_emprendimientoScalarFieldEnum: {
    typo: 'typo',
    descripcion: 'descripcion',
    foto: 'foto'
  };

  export type Typo_emprendimientoScalarFieldEnum = (typeof Typo_emprendimientoScalarFieldEnum)[keyof typeof Typo_emprendimientoScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    pasos: 'pasos',
    herramientas: 'herramientas',
    foto: 'foto',
    tipo: 'tipo'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const Productos_CySScalarFieldEnum: {
    Id: 'Id',
    costo: 'costo',
    stock: 'stock',
    producto: 'producto',
    emprendimiento: 'emprendimiento'
  };

  export type Productos_CySScalarFieldEnum = (typeof Productos_CySScalarFieldEnum)[keyof typeof Productos_CySScalarFieldEnum]


  export const Prod_MatScalarFieldEnum: {
    Id: 'Id',
    cantidad: 'cantidad',
    producto: 'producto',
    materiales: 'materiales'
  };

  export type Prod_MatScalarFieldEnum = (typeof Prod_MatScalarFieldEnum)[keyof typeof Prod_MatScalarFieldEnum]


  export const MaterialesScalarFieldEnum: {
    nombreMat: 'nombreMat',
    unidad: 'unidad',
    foto: 'foto'
  };

  export type MaterialesScalarFieldEnum = (typeof MaterialesScalarFieldEnum)[keyof typeof MaterialesScalarFieldEnum]


  export const Materiales_CySScalarFieldEnum: {
    Id: 'Id',
    costo: 'costo',
    stock: 'stock',
    materiales: 'materiales',
    emprendimiento: 'emprendimiento'
  };

  export type Materiales_CySScalarFieldEnum = (typeof Materiales_CySScalarFieldEnum)[keyof typeof Materiales_CySScalarFieldEnum]


  export const ContactosScalarFieldEnum: {
    Id: 'Id',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono',
    redes_soc: 'redes_soc',
    notas_perz: 'notas_perz',
    foto: 'foto',
    host: 'host'
  };

  export type ContactosScalarFieldEnum = (typeof ContactosScalarFieldEnum)[keyof typeof ContactosScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    email?: StringFilter<"Usuario"> | string
    contasena?: StringFilter<"Usuario"> | string
    nombreUsu?: StringFilter<"Usuario"> | string
    foto?: StringNullableFilter<"Usuario"> | string | null
    emprendimiento?: EmprendimientoListRelationFilter
    contactos?: ContactosListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    email?: SortOrder
    contasena?: SortOrder
    nombreUsu?: SortOrder
    foto?: SortOrderInput | SortOrder
    emprendimiento?: EmprendimientoOrderByRelationAggregateInput
    contactos?: ContactosOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    contasena?: StringFilter<"Usuario"> | string
    nombreUsu?: StringFilter<"Usuario"> | string
    foto?: StringNullableFilter<"Usuario"> | string | null
    emprendimiento?: EmprendimientoListRelationFilter
    contactos?: ContactosListRelationFilter
  }, "email">

  export type UsuarioOrderByWithAggregationInput = {
    email?: SortOrder
    contasena?: SortOrder
    nombreUsu?: SortOrder
    foto?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"Usuario"> | string
    contasena?: StringWithAggregatesFilter<"Usuario"> | string
    nombreUsu?: StringWithAggregatesFilter<"Usuario"> | string
    foto?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type EmprendimientoWhereInput = {
    AND?: EmprendimientoWhereInput | EmprendimientoWhereInput[]
    OR?: EmprendimientoWhereInput[]
    NOT?: EmprendimientoWhereInput | EmprendimientoWhereInput[]
    Id?: IntFilter<"Emprendimiento"> | number
    nombreEmp?: StringFilter<"Emprendimiento"> | string
    colores?: StringNullableFilter<"Emprendimiento"> | string | null
    usuario?: StringFilter<"Emprendimiento"> | string
    tipo?: StringFilter<"Emprendimiento"> | string
    rela_emp_usu?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rela_emp_typoemp?: XOR<Typo_emprendimientoScalarRelationFilter, Typo_emprendimientoWhereInput>
    material_CyS?: Materiales_CySListRelationFilter
    producto_CyS?: Productos_CySListRelationFilter
  }

  export type EmprendimientoOrderByWithRelationInput = {
    Id?: SortOrder
    nombreEmp?: SortOrder
    colores?: SortOrderInput | SortOrder
    usuario?: SortOrder
    tipo?: SortOrder
    rela_emp_usu?: UsuarioOrderByWithRelationInput
    rela_emp_typoemp?: Typo_emprendimientoOrderByWithRelationInput
    material_CyS?: Materiales_CySOrderByRelationAggregateInput
    producto_CyS?: Productos_CySOrderByRelationAggregateInput
  }

  export type EmprendimientoWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: EmprendimientoWhereInput | EmprendimientoWhereInput[]
    OR?: EmprendimientoWhereInput[]
    NOT?: EmprendimientoWhereInput | EmprendimientoWhereInput[]
    nombreEmp?: StringFilter<"Emprendimiento"> | string
    colores?: StringNullableFilter<"Emprendimiento"> | string | null
    usuario?: StringFilter<"Emprendimiento"> | string
    tipo?: StringFilter<"Emprendimiento"> | string
    rela_emp_usu?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rela_emp_typoemp?: XOR<Typo_emprendimientoScalarRelationFilter, Typo_emprendimientoWhereInput>
    material_CyS?: Materiales_CySListRelationFilter
    producto_CyS?: Productos_CySListRelationFilter
  }, "Id">

  export type EmprendimientoOrderByWithAggregationInput = {
    Id?: SortOrder
    nombreEmp?: SortOrder
    colores?: SortOrderInput | SortOrder
    usuario?: SortOrder
    tipo?: SortOrder
    _count?: EmprendimientoCountOrderByAggregateInput
    _avg?: EmprendimientoAvgOrderByAggregateInput
    _max?: EmprendimientoMaxOrderByAggregateInput
    _min?: EmprendimientoMinOrderByAggregateInput
    _sum?: EmprendimientoSumOrderByAggregateInput
  }

  export type EmprendimientoScalarWhereWithAggregatesInput = {
    AND?: EmprendimientoScalarWhereWithAggregatesInput | EmprendimientoScalarWhereWithAggregatesInput[]
    OR?: EmprendimientoScalarWhereWithAggregatesInput[]
    NOT?: EmprendimientoScalarWhereWithAggregatesInput | EmprendimientoScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Emprendimiento"> | number
    nombreEmp?: StringWithAggregatesFilter<"Emprendimiento"> | string
    colores?: StringNullableWithAggregatesFilter<"Emprendimiento"> | string | null
    usuario?: StringWithAggregatesFilter<"Emprendimiento"> | string
    tipo?: StringWithAggregatesFilter<"Emprendimiento"> | string
  }

  export type Typo_emprendimientoWhereInput = {
    AND?: Typo_emprendimientoWhereInput | Typo_emprendimientoWhereInput[]
    OR?: Typo_emprendimientoWhereInput[]
    NOT?: Typo_emprendimientoWhereInput | Typo_emprendimientoWhereInput[]
    typo?: StringFilter<"Typo_emprendimiento"> | string
    descripcion?: StringFilter<"Typo_emprendimiento"> | string
    foto?: StringNullableFilter<"Typo_emprendimiento"> | string | null
    producto?: ProductosListRelationFilter
    emprendimiento?: EmprendimientoListRelationFilter
  }

  export type Typo_emprendimientoOrderByWithRelationInput = {
    typo?: SortOrder
    descripcion?: SortOrder
    foto?: SortOrderInput | SortOrder
    producto?: ProductosOrderByRelationAggregateInput
    emprendimiento?: EmprendimientoOrderByRelationAggregateInput
  }

  export type Typo_emprendimientoWhereUniqueInput = Prisma.AtLeast<{
    typo?: string
    AND?: Typo_emprendimientoWhereInput | Typo_emprendimientoWhereInput[]
    OR?: Typo_emprendimientoWhereInput[]
    NOT?: Typo_emprendimientoWhereInput | Typo_emprendimientoWhereInput[]
    descripcion?: StringFilter<"Typo_emprendimiento"> | string
    foto?: StringNullableFilter<"Typo_emprendimiento"> | string | null
    producto?: ProductosListRelationFilter
    emprendimiento?: EmprendimientoListRelationFilter
  }, "typo">

  export type Typo_emprendimientoOrderByWithAggregationInput = {
    typo?: SortOrder
    descripcion?: SortOrder
    foto?: SortOrderInput | SortOrder
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
    tipo?: StringFilter<"Productos"> | string
    rela_prod_typo?: XOR<Typo_emprendimientoScalarRelationFilter, Typo_emprendimientoWhereInput>
    prod_mat?: Prod_MatListRelationFilter
    producto_CyS?: Productos_CySListRelationFilter
  }

  export type ProductosOrderByWithRelationInput = {
    nombre?: SortOrder
    descripcion?: SortOrder
    pasos?: SortOrder
    herramientas?: SortOrder
    foto?: SortOrderInput | SortOrder
    tipo?: SortOrder
    rela_prod_typo?: Typo_emprendimientoOrderByWithRelationInput
    prod_mat?: Prod_MatOrderByRelationAggregateInput
    producto_CyS?: Productos_CySOrderByRelationAggregateInput
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
    tipo?: StringFilter<"Productos"> | string
    rela_prod_typo?: XOR<Typo_emprendimientoScalarRelationFilter, Typo_emprendimientoWhereInput>
    prod_mat?: Prod_MatListRelationFilter
    producto_CyS?: Productos_CySListRelationFilter
  }, "nombre">

  export type ProductosOrderByWithAggregationInput = {
    nombre?: SortOrder
    descripcion?: SortOrder
    pasos?: SortOrder
    herramientas?: SortOrder
    foto?: SortOrderInput | SortOrder
    tipo?: SortOrder
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
    tipo?: StringWithAggregatesFilter<"Productos"> | string
  }

  export type Productos_CySWhereInput = {
    AND?: Productos_CySWhereInput | Productos_CySWhereInput[]
    OR?: Productos_CySWhereInput[]
    NOT?: Productos_CySWhereInput | Productos_CySWhereInput[]
    Id?: IntFilter<"Productos_CyS"> | number
    costo?: StringNullableFilter<"Productos_CyS"> | string | null
    stock?: IntNullableFilter<"Productos_CyS"> | number | null
    producto?: StringFilter<"Productos_CyS"> | string
    emprendimiento?: IntFilter<"Productos_CyS"> | number
    rela_Prod?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
    rela_Emp?: XOR<EmprendimientoScalarRelationFilter, EmprendimientoWhereInput>
  }

  export type Productos_CySOrderByWithRelationInput = {
    Id?: SortOrder
    costo?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    producto?: SortOrder
    emprendimiento?: SortOrder
    rela_Prod?: ProductosOrderByWithRelationInput
    rela_Emp?: EmprendimientoOrderByWithRelationInput
  }

  export type Productos_CySWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: Productos_CySWhereInput | Productos_CySWhereInput[]
    OR?: Productos_CySWhereInput[]
    NOT?: Productos_CySWhereInput | Productos_CySWhereInput[]
    costo?: StringNullableFilter<"Productos_CyS"> | string | null
    stock?: IntNullableFilter<"Productos_CyS"> | number | null
    producto?: StringFilter<"Productos_CyS"> | string
    emprendimiento?: IntFilter<"Productos_CyS"> | number
    rela_Prod?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
    rela_Emp?: XOR<EmprendimientoScalarRelationFilter, EmprendimientoWhereInput>
  }, "Id">

  export type Productos_CySOrderByWithAggregationInput = {
    Id?: SortOrder
    costo?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    producto?: SortOrder
    emprendimiento?: SortOrder
    _count?: Productos_CySCountOrderByAggregateInput
    _avg?: Productos_CySAvgOrderByAggregateInput
    _max?: Productos_CySMaxOrderByAggregateInput
    _min?: Productos_CySMinOrderByAggregateInput
    _sum?: Productos_CySSumOrderByAggregateInput
  }

  export type Productos_CySScalarWhereWithAggregatesInput = {
    AND?: Productos_CySScalarWhereWithAggregatesInput | Productos_CySScalarWhereWithAggregatesInput[]
    OR?: Productos_CySScalarWhereWithAggregatesInput[]
    NOT?: Productos_CySScalarWhereWithAggregatesInput | Productos_CySScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Productos_CyS"> | number
    costo?: StringNullableWithAggregatesFilter<"Productos_CyS"> | string | null
    stock?: IntNullableWithAggregatesFilter<"Productos_CyS"> | number | null
    producto?: StringWithAggregatesFilter<"Productos_CyS"> | string
    emprendimiento?: IntWithAggregatesFilter<"Productos_CyS"> | number
  }

  export type Prod_MatWhereInput = {
    AND?: Prod_MatWhereInput | Prod_MatWhereInput[]
    OR?: Prod_MatWhereInput[]
    NOT?: Prod_MatWhereInput | Prod_MatWhereInput[]
    Id?: IntFilter<"Prod_Mat"> | number
    cantidad?: StringFilter<"Prod_Mat"> | string
    producto?: StringFilter<"Prod_Mat"> | string
    materiales?: StringFilter<"Prod_Mat"> | string
    rela_PyM?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
    rela_MyP?: XOR<MaterialesScalarRelationFilter, MaterialesWhereInput>
  }

  export type Prod_MatOrderByWithRelationInput = {
    Id?: SortOrder
    cantidad?: SortOrder
    producto?: SortOrder
    materiales?: SortOrder
    rela_PyM?: ProductosOrderByWithRelationInput
    rela_MyP?: MaterialesOrderByWithRelationInput
  }

  export type Prod_MatWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: Prod_MatWhereInput | Prod_MatWhereInput[]
    OR?: Prod_MatWhereInput[]
    NOT?: Prod_MatWhereInput | Prod_MatWhereInput[]
    cantidad?: StringFilter<"Prod_Mat"> | string
    producto?: StringFilter<"Prod_Mat"> | string
    materiales?: StringFilter<"Prod_Mat"> | string
    rela_PyM?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
    rela_MyP?: XOR<MaterialesScalarRelationFilter, MaterialesWhereInput>
  }, "Id">

  export type Prod_MatOrderByWithAggregationInput = {
    Id?: SortOrder
    cantidad?: SortOrder
    producto?: SortOrder
    materiales?: SortOrder
    _count?: Prod_MatCountOrderByAggregateInput
    _avg?: Prod_MatAvgOrderByAggregateInput
    _max?: Prod_MatMaxOrderByAggregateInput
    _min?: Prod_MatMinOrderByAggregateInput
    _sum?: Prod_MatSumOrderByAggregateInput
  }

  export type Prod_MatScalarWhereWithAggregatesInput = {
    AND?: Prod_MatScalarWhereWithAggregatesInput | Prod_MatScalarWhereWithAggregatesInput[]
    OR?: Prod_MatScalarWhereWithAggregatesInput[]
    NOT?: Prod_MatScalarWhereWithAggregatesInput | Prod_MatScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Prod_Mat"> | number
    cantidad?: StringWithAggregatesFilter<"Prod_Mat"> | string
    producto?: StringWithAggregatesFilter<"Prod_Mat"> | string
    materiales?: StringWithAggregatesFilter<"Prod_Mat"> | string
  }

  export type MaterialesWhereInput = {
    AND?: MaterialesWhereInput | MaterialesWhereInput[]
    OR?: MaterialesWhereInput[]
    NOT?: MaterialesWhereInput | MaterialesWhereInput[]
    nombreMat?: StringFilter<"Materiales"> | string
    unidad?: StringFilter<"Materiales"> | string
    foto?: StringNullableFilter<"Materiales"> | string | null
    prod_mat?: Prod_MatListRelationFilter
    materiales_CyS?: Materiales_CySListRelationFilter
  }

  export type MaterialesOrderByWithRelationInput = {
    nombreMat?: SortOrder
    unidad?: SortOrder
    foto?: SortOrderInput | SortOrder
    prod_mat?: Prod_MatOrderByRelationAggregateInput
    materiales_CyS?: Materiales_CySOrderByRelationAggregateInput
  }

  export type MaterialesWhereUniqueInput = Prisma.AtLeast<{
    nombreMat?: string
    AND?: MaterialesWhereInput | MaterialesWhereInput[]
    OR?: MaterialesWhereInput[]
    NOT?: MaterialesWhereInput | MaterialesWhereInput[]
    unidad?: StringFilter<"Materiales"> | string
    foto?: StringNullableFilter<"Materiales"> | string | null
    prod_mat?: Prod_MatListRelationFilter
    materiales_CyS?: Materiales_CySListRelationFilter
  }, "nombreMat">

  export type MaterialesOrderByWithAggregationInput = {
    nombreMat?: SortOrder
    unidad?: SortOrder
    foto?: SortOrderInput | SortOrder
    _count?: MaterialesCountOrderByAggregateInput
    _max?: MaterialesMaxOrderByAggregateInput
    _min?: MaterialesMinOrderByAggregateInput
  }

  export type MaterialesScalarWhereWithAggregatesInput = {
    AND?: MaterialesScalarWhereWithAggregatesInput | MaterialesScalarWhereWithAggregatesInput[]
    OR?: MaterialesScalarWhereWithAggregatesInput[]
    NOT?: MaterialesScalarWhereWithAggregatesInput | MaterialesScalarWhereWithAggregatesInput[]
    nombreMat?: StringWithAggregatesFilter<"Materiales"> | string
    unidad?: StringWithAggregatesFilter<"Materiales"> | string
    foto?: StringNullableWithAggregatesFilter<"Materiales"> | string | null
  }

  export type Materiales_CySWhereInput = {
    AND?: Materiales_CySWhereInput | Materiales_CySWhereInput[]
    OR?: Materiales_CySWhereInput[]
    NOT?: Materiales_CySWhereInput | Materiales_CySWhereInput[]
    Id?: IntFilter<"Materiales_CyS"> | number
    costo?: StringNullableFilter<"Materiales_CyS"> | string | null
    stock?: IntNullableFilter<"Materiales_CyS"> | number | null
    materiales?: StringFilter<"Materiales_CyS"> | string
    emprendimiento?: IntFilter<"Materiales_CyS"> | number
    rela_Mat?: XOR<MaterialesScalarRelationFilter, MaterialesWhereInput>
    rela_Emp?: XOR<EmprendimientoScalarRelationFilter, EmprendimientoWhereInput>
  }

  export type Materiales_CySOrderByWithRelationInput = {
    Id?: SortOrder
    costo?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    materiales?: SortOrder
    emprendimiento?: SortOrder
    rela_Mat?: MaterialesOrderByWithRelationInput
    rela_Emp?: EmprendimientoOrderByWithRelationInput
  }

  export type Materiales_CySWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: Materiales_CySWhereInput | Materiales_CySWhereInput[]
    OR?: Materiales_CySWhereInput[]
    NOT?: Materiales_CySWhereInput | Materiales_CySWhereInput[]
    costo?: StringNullableFilter<"Materiales_CyS"> | string | null
    stock?: IntNullableFilter<"Materiales_CyS"> | number | null
    materiales?: StringFilter<"Materiales_CyS"> | string
    emprendimiento?: IntFilter<"Materiales_CyS"> | number
    rela_Mat?: XOR<MaterialesScalarRelationFilter, MaterialesWhereInput>
    rela_Emp?: XOR<EmprendimientoScalarRelationFilter, EmprendimientoWhereInput>
  }, "Id">

  export type Materiales_CySOrderByWithAggregationInput = {
    Id?: SortOrder
    costo?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    materiales?: SortOrder
    emprendimiento?: SortOrder
    _count?: Materiales_CySCountOrderByAggregateInput
    _avg?: Materiales_CySAvgOrderByAggregateInput
    _max?: Materiales_CySMaxOrderByAggregateInput
    _min?: Materiales_CySMinOrderByAggregateInput
    _sum?: Materiales_CySSumOrderByAggregateInput
  }

  export type Materiales_CySScalarWhereWithAggregatesInput = {
    AND?: Materiales_CySScalarWhereWithAggregatesInput | Materiales_CySScalarWhereWithAggregatesInput[]
    OR?: Materiales_CySScalarWhereWithAggregatesInput[]
    NOT?: Materiales_CySScalarWhereWithAggregatesInput | Materiales_CySScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Materiales_CyS"> | number
    costo?: StringNullableWithAggregatesFilter<"Materiales_CyS"> | string | null
    stock?: IntNullableWithAggregatesFilter<"Materiales_CyS"> | number | null
    materiales?: StringWithAggregatesFilter<"Materiales_CyS"> | string
    emprendimiento?: IntWithAggregatesFilter<"Materiales_CyS"> | number
  }

  export type ContactosWhereInput = {
    AND?: ContactosWhereInput | ContactosWhereInput[]
    OR?: ContactosWhereInput[]
    NOT?: ContactosWhereInput | ContactosWhereInput[]
    Id?: IntFilter<"Contactos"> | number
    nombre?: StringFilter<"Contactos"> | string
    email?: StringNullableFilter<"Contactos"> | string | null
    telefono?: IntNullableFilter<"Contactos"> | number | null
    redes_soc?: StringNullableFilter<"Contactos"> | string | null
    notas_perz?: StringNullableFilter<"Contactos"> | string | null
    foto?: StringNullableFilter<"Contactos"> | string | null
    host?: StringFilter<"Contactos"> | string
    propietario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ContactosOrderByWithRelationInput = {
    Id?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    redes_soc?: SortOrderInput | SortOrder
    notas_perz?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    host?: SortOrder
    propietario?: UsuarioOrderByWithRelationInput
  }

  export type ContactosWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ContactosWhereInput | ContactosWhereInput[]
    OR?: ContactosWhereInput[]
    NOT?: ContactosWhereInput | ContactosWhereInput[]
    nombre?: StringFilter<"Contactos"> | string
    email?: StringNullableFilter<"Contactos"> | string | null
    telefono?: IntNullableFilter<"Contactos"> | number | null
    redes_soc?: StringNullableFilter<"Contactos"> | string | null
    notas_perz?: StringNullableFilter<"Contactos"> | string | null
    foto?: StringNullableFilter<"Contactos"> | string | null
    host?: StringFilter<"Contactos"> | string
    propietario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "Id">

  export type ContactosOrderByWithAggregationInput = {
    Id?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    redes_soc?: SortOrderInput | SortOrder
    notas_perz?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    host?: SortOrder
    _count?: ContactosCountOrderByAggregateInput
    _avg?: ContactosAvgOrderByAggregateInput
    _max?: ContactosMaxOrderByAggregateInput
    _min?: ContactosMinOrderByAggregateInput
    _sum?: ContactosSumOrderByAggregateInput
  }

  export type ContactosScalarWhereWithAggregatesInput = {
    AND?: ContactosScalarWhereWithAggregatesInput | ContactosScalarWhereWithAggregatesInput[]
    OR?: ContactosScalarWhereWithAggregatesInput[]
    NOT?: ContactosScalarWhereWithAggregatesInput | ContactosScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Contactos"> | number
    nombre?: StringWithAggregatesFilter<"Contactos"> | string
    email?: StringNullableWithAggregatesFilter<"Contactos"> | string | null
    telefono?: IntNullableWithAggregatesFilter<"Contactos"> | number | null
    redes_soc?: StringNullableWithAggregatesFilter<"Contactos"> | string | null
    notas_perz?: StringNullableWithAggregatesFilter<"Contactos"> | string | null
    foto?: StringNullableWithAggregatesFilter<"Contactos"> | string | null
    host?: StringWithAggregatesFilter<"Contactos"> | string
  }

  export type UsuarioCreateInput = {
    email: string
    contasena: string
    nombreUsu: string
    foto?: string | null
    emprendimiento?: EmprendimientoCreateNestedManyWithoutRela_emp_usuInput
    contactos?: ContactosCreateNestedManyWithoutPropietarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    email: string
    contasena: string
    nombreUsu: string
    foto?: string | null
    emprendimiento?: EmprendimientoUncheckedCreateNestedManyWithoutRela_emp_usuInput
    contactos?: ContactosUncheckedCreateNestedManyWithoutPropietarioInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    contasena?: StringFieldUpdateOperationsInput | string
    nombreUsu?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    emprendimiento?: EmprendimientoUpdateManyWithoutRela_emp_usuNestedInput
    contactos?: ContactosUpdateManyWithoutPropietarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    contasena?: StringFieldUpdateOperationsInput | string
    nombreUsu?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    emprendimiento?: EmprendimientoUncheckedUpdateManyWithoutRela_emp_usuNestedInput
    contactos?: ContactosUncheckedUpdateManyWithoutPropietarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    email: string
    contasena: string
    nombreUsu: string
    foto?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    contasena?: StringFieldUpdateOperationsInput | string
    nombreUsu?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    contasena?: StringFieldUpdateOperationsInput | string
    nombreUsu?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmprendimientoCreateInput = {
    nombreEmp: string
    colores?: string | null
    rela_emp_usu: UsuarioCreateNestedOneWithoutEmprendimientoInput
    rela_emp_typoemp: Typo_emprendimientoCreateNestedOneWithoutEmprendimientoInput
    material_CyS?: Materiales_CySCreateNestedManyWithoutRela_EmpInput
    producto_CyS?: Productos_CySCreateNestedManyWithoutRela_EmpInput
  }

  export type EmprendimientoUncheckedCreateInput = {
    Id?: number
    nombreEmp: string
    colores?: string | null
    usuario: string
    tipo: string
    material_CyS?: Materiales_CySUncheckedCreateNestedManyWithoutRela_EmpInput
    producto_CyS?: Productos_CySUncheckedCreateNestedManyWithoutRela_EmpInput
  }

  export type EmprendimientoUpdateInput = {
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    rela_emp_usu?: UsuarioUpdateOneRequiredWithoutEmprendimientoNestedInput
    rela_emp_typoemp?: Typo_emprendimientoUpdateOneRequiredWithoutEmprendimientoNestedInput
    material_CyS?: Materiales_CySUpdateManyWithoutRela_EmpNestedInput
    producto_CyS?: Productos_CySUpdateManyWithoutRela_EmpNestedInput
  }

  export type EmprendimientoUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    material_CyS?: Materiales_CySUncheckedUpdateManyWithoutRela_EmpNestedInput
    producto_CyS?: Productos_CySUncheckedUpdateManyWithoutRela_EmpNestedInput
  }

  export type EmprendimientoCreateManyInput = {
    Id?: number
    nombreEmp: string
    colores?: string | null
    usuario: string
    tipo: string
  }

  export type EmprendimientoUpdateManyMutationInput = {
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmprendimientoUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type Typo_emprendimientoCreateInput = {
    typo: string
    descripcion: string
    foto?: string | null
    producto?: ProductosCreateNestedManyWithoutRela_prod_typoInput
    emprendimiento?: EmprendimientoCreateNestedManyWithoutRela_emp_typoempInput
  }

  export type Typo_emprendimientoUncheckedCreateInput = {
    typo: string
    descripcion: string
    foto?: string | null
    producto?: ProductosUncheckedCreateNestedManyWithoutRela_prod_typoInput
    emprendimiento?: EmprendimientoUncheckedCreateNestedManyWithoutRela_emp_typoempInput
  }

  export type Typo_emprendimientoUpdateInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    producto?: ProductosUpdateManyWithoutRela_prod_typoNestedInput
    emprendimiento?: EmprendimientoUpdateManyWithoutRela_emp_typoempNestedInput
  }

  export type Typo_emprendimientoUncheckedUpdateInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    producto?: ProductosUncheckedUpdateManyWithoutRela_prod_typoNestedInput
    emprendimiento?: EmprendimientoUncheckedUpdateManyWithoutRela_emp_typoempNestedInput
  }

  export type Typo_emprendimientoCreateManyInput = {
    typo: string
    descripcion: string
    foto?: string | null
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
  }

  export type ProductosCreateInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    rela_prod_typo: Typo_emprendimientoCreateNestedOneWithoutProductoInput
    prod_mat?: Prod_MatCreateNestedManyWithoutRela_PyMInput
    producto_CyS?: Productos_CySCreateNestedManyWithoutRela_ProdInput
  }

  export type ProductosUncheckedCreateInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    tipo: string
    prod_mat?: Prod_MatUncheckedCreateNestedManyWithoutRela_PyMInput
    producto_CyS?: Productos_CySUncheckedCreateNestedManyWithoutRela_ProdInput
  }

  export type ProductosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    rela_prod_typo?: Typo_emprendimientoUpdateOneRequiredWithoutProductoNestedInput
    prod_mat?: Prod_MatUpdateManyWithoutRela_PyMNestedInput
    producto_CyS?: Productos_CySUpdateManyWithoutRela_ProdNestedInput
  }

  export type ProductosUncheckedUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    prod_mat?: Prod_MatUncheckedUpdateManyWithoutRela_PyMNestedInput
    producto_CyS?: Productos_CySUncheckedUpdateManyWithoutRela_ProdNestedInput
  }

  export type ProductosCreateManyInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    tipo: string
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
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type Productos_CySCreateInput = {
    costo?: string | null
    stock?: number | null
    rela_Prod: ProductosCreateNestedOneWithoutProducto_CySInput
    rela_Emp: EmprendimientoCreateNestedOneWithoutProducto_CySInput
  }

  export type Productos_CySUncheckedCreateInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    producto: string
    emprendimiento: number
  }

  export type Productos_CySUpdateInput = {
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    rela_Prod?: ProductosUpdateOneRequiredWithoutProducto_CySNestedInput
    rela_Emp?: EmprendimientoUpdateOneRequiredWithoutProducto_CySNestedInput
  }

  export type Productos_CySUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    producto?: StringFieldUpdateOperationsInput | string
    emprendimiento?: IntFieldUpdateOperationsInput | number
  }

  export type Productos_CySCreateManyInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    producto: string
    emprendimiento: number
  }

  export type Productos_CySUpdateManyMutationInput = {
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Productos_CySUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    producto?: StringFieldUpdateOperationsInput | string
    emprendimiento?: IntFieldUpdateOperationsInput | number
  }

  export type Prod_MatCreateInput = {
    cantidad: string
    rela_PyM: ProductosCreateNestedOneWithoutProd_matInput
    rela_MyP: MaterialesCreateNestedOneWithoutProd_matInput
  }

  export type Prod_MatUncheckedCreateInput = {
    Id?: number
    cantidad: string
    producto: string
    materiales: string
  }

  export type Prod_MatUpdateInput = {
    cantidad?: StringFieldUpdateOperationsInput | string
    rela_PyM?: ProductosUpdateOneRequiredWithoutProd_matNestedInput
    rela_MyP?: MaterialesUpdateOneRequiredWithoutProd_matNestedInput
  }

  export type Prod_MatUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    cantidad?: StringFieldUpdateOperationsInput | string
    producto?: StringFieldUpdateOperationsInput | string
    materiales?: StringFieldUpdateOperationsInput | string
  }

  export type Prod_MatCreateManyInput = {
    Id?: number
    cantidad: string
    producto: string
    materiales: string
  }

  export type Prod_MatUpdateManyMutationInput = {
    cantidad?: StringFieldUpdateOperationsInput | string
  }

  export type Prod_MatUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    cantidad?: StringFieldUpdateOperationsInput | string
    producto?: StringFieldUpdateOperationsInput | string
    materiales?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialesCreateInput = {
    nombreMat: string
    unidad: string
    foto?: string | null
    prod_mat?: Prod_MatCreateNestedManyWithoutRela_MyPInput
    materiales_CyS?: Materiales_CySCreateNestedManyWithoutRela_MatInput
  }

  export type MaterialesUncheckedCreateInput = {
    nombreMat: string
    unidad: string
    foto?: string | null
    prod_mat?: Prod_MatUncheckedCreateNestedManyWithoutRela_MyPInput
    materiales_CyS?: Materiales_CySUncheckedCreateNestedManyWithoutRela_MatInput
  }

  export type MaterialesUpdateInput = {
    nombreMat?: StringFieldUpdateOperationsInput | string
    unidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    prod_mat?: Prod_MatUpdateManyWithoutRela_MyPNestedInput
    materiales_CyS?: Materiales_CySUpdateManyWithoutRela_MatNestedInput
  }

  export type MaterialesUncheckedUpdateInput = {
    nombreMat?: StringFieldUpdateOperationsInput | string
    unidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    prod_mat?: Prod_MatUncheckedUpdateManyWithoutRela_MyPNestedInput
    materiales_CyS?: Materiales_CySUncheckedUpdateManyWithoutRela_MatNestedInput
  }

  export type MaterialesCreateManyInput = {
    nombreMat: string
    unidad: string
    foto?: string | null
  }

  export type MaterialesUpdateManyMutationInput = {
    nombreMat?: StringFieldUpdateOperationsInput | string
    unidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaterialesUncheckedUpdateManyInput = {
    nombreMat?: StringFieldUpdateOperationsInput | string
    unidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Materiales_CySCreateInput = {
    costo?: string | null
    stock?: number | null
    rela_Mat: MaterialesCreateNestedOneWithoutMateriales_CySInput
    rela_Emp: EmprendimientoCreateNestedOneWithoutMaterial_CySInput
  }

  export type Materiales_CySUncheckedCreateInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    materiales: string
    emprendimiento: number
  }

  export type Materiales_CySUpdateInput = {
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    rela_Mat?: MaterialesUpdateOneRequiredWithoutMateriales_CySNestedInput
    rela_Emp?: EmprendimientoUpdateOneRequiredWithoutMaterial_CySNestedInput
  }

  export type Materiales_CySUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    materiales?: StringFieldUpdateOperationsInput | string
    emprendimiento?: IntFieldUpdateOperationsInput | number
  }

  export type Materiales_CySCreateManyInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    materiales: string
    emprendimiento: number
  }

  export type Materiales_CySUpdateManyMutationInput = {
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Materiales_CySUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    materiales?: StringFieldUpdateOperationsInput | string
    emprendimiento?: IntFieldUpdateOperationsInput | number
  }

  export type ContactosCreateInput = {
    nombre: string
    email?: string | null
    telefono?: number | null
    redes_soc?: string | null
    notas_perz?: string | null
    foto?: string | null
    propietario: UsuarioCreateNestedOneWithoutContactosInput
  }

  export type ContactosUncheckedCreateInput = {
    Id?: number
    nombre: string
    email?: string | null
    telefono?: number | null
    redes_soc?: string | null
    notas_perz?: string | null
    foto?: string | null
    host: string
  }

  export type ContactosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    redes_soc?: NullableStringFieldUpdateOperationsInput | string | null
    notas_perz?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    propietario?: UsuarioUpdateOneRequiredWithoutContactosNestedInput
  }

  export type ContactosUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    redes_soc?: NullableStringFieldUpdateOperationsInput | string | null
    notas_perz?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    host?: StringFieldUpdateOperationsInput | string
  }

  export type ContactosCreateManyInput = {
    Id?: number
    nombre: string
    email?: string | null
    telefono?: number | null
    redes_soc?: string | null
    notas_perz?: string | null
    foto?: string | null
    host: string
  }

  export type ContactosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    redes_soc?: NullableStringFieldUpdateOperationsInput | string | null
    notas_perz?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactosUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    redes_soc?: NullableStringFieldUpdateOperationsInput | string | null
    notas_perz?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    host?: StringFieldUpdateOperationsInput | string
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

  export type EmprendimientoListRelationFilter = {
    every?: EmprendimientoWhereInput
    some?: EmprendimientoWhereInput
    none?: EmprendimientoWhereInput
  }

  export type ContactosListRelationFilter = {
    every?: ContactosWhereInput
    some?: ContactosWhereInput
    none?: ContactosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmprendimientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    email?: SortOrder
    contasena?: SortOrder
    nombreUsu?: SortOrder
    foto?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    email?: SortOrder
    contasena?: SortOrder
    nombreUsu?: SortOrder
    foto?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    email?: SortOrder
    contasena?: SortOrder
    nombreUsu?: SortOrder
    foto?: SortOrder
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type Typo_emprendimientoScalarRelationFilter = {
    is?: Typo_emprendimientoWhereInput
    isNot?: Typo_emprendimientoWhereInput
  }

  export type Materiales_CySListRelationFilter = {
    every?: Materiales_CySWhereInput
    some?: Materiales_CySWhereInput
    none?: Materiales_CySWhereInput
  }

  export type Productos_CySListRelationFilter = {
    every?: Productos_CySWhereInput
    some?: Productos_CySWhereInput
    none?: Productos_CySWhereInput
  }

  export type Materiales_CySOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Productos_CySOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmprendimientoCountOrderByAggregateInput = {
    Id?: SortOrder
    nombreEmp?: SortOrder
    colores?: SortOrder
    usuario?: SortOrder
    tipo?: SortOrder
  }

  export type EmprendimientoAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type EmprendimientoMaxOrderByAggregateInput = {
    Id?: SortOrder
    nombreEmp?: SortOrder
    colores?: SortOrder
    usuario?: SortOrder
    tipo?: SortOrder
  }

  export type EmprendimientoMinOrderByAggregateInput = {
    Id?: SortOrder
    nombreEmp?: SortOrder
    colores?: SortOrder
    usuario?: SortOrder
    tipo?: SortOrder
  }

  export type EmprendimientoSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProductosListRelationFilter = {
    every?: ProductosWhereInput
    some?: ProductosWhereInput
    none?: ProductosWhereInput
  }

  export type ProductosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Typo_emprendimientoCountOrderByAggregateInput = {
    typo?: SortOrder
    descripcion?: SortOrder
    foto?: SortOrder
  }

  export type Typo_emprendimientoMaxOrderByAggregateInput = {
    typo?: SortOrder
    descripcion?: SortOrder
    foto?: SortOrder
  }

  export type Typo_emprendimientoMinOrderByAggregateInput = {
    typo?: SortOrder
    descripcion?: SortOrder
    foto?: SortOrder
  }

  export type Prod_MatListRelationFilter = {
    every?: Prod_MatWhereInput
    some?: Prod_MatWhereInput
    none?: Prod_MatWhereInput
  }

  export type Prod_MatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductosCountOrderByAggregateInput = {
    nombre?: SortOrder
    descripcion?: SortOrder
    pasos?: SortOrder
    herramientas?: SortOrder
    foto?: SortOrder
    tipo?: SortOrder
  }

  export type ProductosMaxOrderByAggregateInput = {
    nombre?: SortOrder
    descripcion?: SortOrder
    pasos?: SortOrder
    herramientas?: SortOrder
    foto?: SortOrder
    tipo?: SortOrder
  }

  export type ProductosMinOrderByAggregateInput = {
    nombre?: SortOrder
    descripcion?: SortOrder
    pasos?: SortOrder
    herramientas?: SortOrder
    foto?: SortOrder
    tipo?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductosScalarRelationFilter = {
    is?: ProductosWhereInput
    isNot?: ProductosWhereInput
  }

  export type EmprendimientoScalarRelationFilter = {
    is?: EmprendimientoWhereInput
    isNot?: EmprendimientoWhereInput
  }

  export type Productos_CySCountOrderByAggregateInput = {
    Id?: SortOrder
    costo?: SortOrder
    stock?: SortOrder
    producto?: SortOrder
    emprendimiento?: SortOrder
  }

  export type Productos_CySAvgOrderByAggregateInput = {
    Id?: SortOrder
    stock?: SortOrder
    emprendimiento?: SortOrder
  }

  export type Productos_CySMaxOrderByAggregateInput = {
    Id?: SortOrder
    costo?: SortOrder
    stock?: SortOrder
    producto?: SortOrder
    emprendimiento?: SortOrder
  }

  export type Productos_CySMinOrderByAggregateInput = {
    Id?: SortOrder
    costo?: SortOrder
    stock?: SortOrder
    producto?: SortOrder
    emprendimiento?: SortOrder
  }

  export type Productos_CySSumOrderByAggregateInput = {
    Id?: SortOrder
    stock?: SortOrder
    emprendimiento?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MaterialesScalarRelationFilter = {
    is?: MaterialesWhereInput
    isNot?: MaterialesWhereInput
  }

  export type Prod_MatCountOrderByAggregateInput = {
    Id?: SortOrder
    cantidad?: SortOrder
    producto?: SortOrder
    materiales?: SortOrder
  }

  export type Prod_MatAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type Prod_MatMaxOrderByAggregateInput = {
    Id?: SortOrder
    cantidad?: SortOrder
    producto?: SortOrder
    materiales?: SortOrder
  }

  export type Prod_MatMinOrderByAggregateInput = {
    Id?: SortOrder
    cantidad?: SortOrder
    producto?: SortOrder
    materiales?: SortOrder
  }

  export type Prod_MatSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type MaterialesCountOrderByAggregateInput = {
    nombreMat?: SortOrder
    unidad?: SortOrder
    foto?: SortOrder
  }

  export type MaterialesMaxOrderByAggregateInput = {
    nombreMat?: SortOrder
    unidad?: SortOrder
    foto?: SortOrder
  }

  export type MaterialesMinOrderByAggregateInput = {
    nombreMat?: SortOrder
    unidad?: SortOrder
    foto?: SortOrder
  }

  export type Materiales_CySCountOrderByAggregateInput = {
    Id?: SortOrder
    costo?: SortOrder
    stock?: SortOrder
    materiales?: SortOrder
    emprendimiento?: SortOrder
  }

  export type Materiales_CySAvgOrderByAggregateInput = {
    Id?: SortOrder
    stock?: SortOrder
    emprendimiento?: SortOrder
  }

  export type Materiales_CySMaxOrderByAggregateInput = {
    Id?: SortOrder
    costo?: SortOrder
    stock?: SortOrder
    materiales?: SortOrder
    emprendimiento?: SortOrder
  }

  export type Materiales_CySMinOrderByAggregateInput = {
    Id?: SortOrder
    costo?: SortOrder
    stock?: SortOrder
    materiales?: SortOrder
    emprendimiento?: SortOrder
  }

  export type Materiales_CySSumOrderByAggregateInput = {
    Id?: SortOrder
    stock?: SortOrder
    emprendimiento?: SortOrder
  }

  export type ContactosCountOrderByAggregateInput = {
    Id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    redes_soc?: SortOrder
    notas_perz?: SortOrder
    foto?: SortOrder
    host?: SortOrder
  }

  export type ContactosAvgOrderByAggregateInput = {
    Id?: SortOrder
    telefono?: SortOrder
  }

  export type ContactosMaxOrderByAggregateInput = {
    Id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    redes_soc?: SortOrder
    notas_perz?: SortOrder
    foto?: SortOrder
    host?: SortOrder
  }

  export type ContactosMinOrderByAggregateInput = {
    Id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    redes_soc?: SortOrder
    notas_perz?: SortOrder
    foto?: SortOrder
    host?: SortOrder
  }

  export type ContactosSumOrderByAggregateInput = {
    Id?: SortOrder
    telefono?: SortOrder
  }

  export type EmprendimientoCreateNestedManyWithoutRela_emp_usuInput = {
    create?: XOR<EmprendimientoCreateWithoutRela_emp_usuInput, EmprendimientoUncheckedCreateWithoutRela_emp_usuInput> | EmprendimientoCreateWithoutRela_emp_usuInput[] | EmprendimientoUncheckedCreateWithoutRela_emp_usuInput[]
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutRela_emp_usuInput | EmprendimientoCreateOrConnectWithoutRela_emp_usuInput[]
    createMany?: EmprendimientoCreateManyRela_emp_usuInputEnvelope
    connect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
  }

  export type ContactosCreateNestedManyWithoutPropietarioInput = {
    create?: XOR<ContactosCreateWithoutPropietarioInput, ContactosUncheckedCreateWithoutPropietarioInput> | ContactosCreateWithoutPropietarioInput[] | ContactosUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: ContactosCreateOrConnectWithoutPropietarioInput | ContactosCreateOrConnectWithoutPropietarioInput[]
    createMany?: ContactosCreateManyPropietarioInputEnvelope
    connect?: ContactosWhereUniqueInput | ContactosWhereUniqueInput[]
  }

  export type EmprendimientoUncheckedCreateNestedManyWithoutRela_emp_usuInput = {
    create?: XOR<EmprendimientoCreateWithoutRela_emp_usuInput, EmprendimientoUncheckedCreateWithoutRela_emp_usuInput> | EmprendimientoCreateWithoutRela_emp_usuInput[] | EmprendimientoUncheckedCreateWithoutRela_emp_usuInput[]
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutRela_emp_usuInput | EmprendimientoCreateOrConnectWithoutRela_emp_usuInput[]
    createMany?: EmprendimientoCreateManyRela_emp_usuInputEnvelope
    connect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
  }

  export type ContactosUncheckedCreateNestedManyWithoutPropietarioInput = {
    create?: XOR<ContactosCreateWithoutPropietarioInput, ContactosUncheckedCreateWithoutPropietarioInput> | ContactosCreateWithoutPropietarioInput[] | ContactosUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: ContactosCreateOrConnectWithoutPropietarioInput | ContactosCreateOrConnectWithoutPropietarioInput[]
    createMany?: ContactosCreateManyPropietarioInputEnvelope
    connect?: ContactosWhereUniqueInput | ContactosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EmprendimientoUpdateManyWithoutRela_emp_usuNestedInput = {
    create?: XOR<EmprendimientoCreateWithoutRela_emp_usuInput, EmprendimientoUncheckedCreateWithoutRela_emp_usuInput> | EmprendimientoCreateWithoutRela_emp_usuInput[] | EmprendimientoUncheckedCreateWithoutRela_emp_usuInput[]
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutRela_emp_usuInput | EmprendimientoCreateOrConnectWithoutRela_emp_usuInput[]
    upsert?: EmprendimientoUpsertWithWhereUniqueWithoutRela_emp_usuInput | EmprendimientoUpsertWithWhereUniqueWithoutRela_emp_usuInput[]
    createMany?: EmprendimientoCreateManyRela_emp_usuInputEnvelope
    set?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    disconnect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    delete?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    connect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    update?: EmprendimientoUpdateWithWhereUniqueWithoutRela_emp_usuInput | EmprendimientoUpdateWithWhereUniqueWithoutRela_emp_usuInput[]
    updateMany?: EmprendimientoUpdateManyWithWhereWithoutRela_emp_usuInput | EmprendimientoUpdateManyWithWhereWithoutRela_emp_usuInput[]
    deleteMany?: EmprendimientoScalarWhereInput | EmprendimientoScalarWhereInput[]
  }

  export type ContactosUpdateManyWithoutPropietarioNestedInput = {
    create?: XOR<ContactosCreateWithoutPropietarioInput, ContactosUncheckedCreateWithoutPropietarioInput> | ContactosCreateWithoutPropietarioInput[] | ContactosUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: ContactosCreateOrConnectWithoutPropietarioInput | ContactosCreateOrConnectWithoutPropietarioInput[]
    upsert?: ContactosUpsertWithWhereUniqueWithoutPropietarioInput | ContactosUpsertWithWhereUniqueWithoutPropietarioInput[]
    createMany?: ContactosCreateManyPropietarioInputEnvelope
    set?: ContactosWhereUniqueInput | ContactosWhereUniqueInput[]
    disconnect?: ContactosWhereUniqueInput | ContactosWhereUniqueInput[]
    delete?: ContactosWhereUniqueInput | ContactosWhereUniqueInput[]
    connect?: ContactosWhereUniqueInput | ContactosWhereUniqueInput[]
    update?: ContactosUpdateWithWhereUniqueWithoutPropietarioInput | ContactosUpdateWithWhereUniqueWithoutPropietarioInput[]
    updateMany?: ContactosUpdateManyWithWhereWithoutPropietarioInput | ContactosUpdateManyWithWhereWithoutPropietarioInput[]
    deleteMany?: ContactosScalarWhereInput | ContactosScalarWhereInput[]
  }

  export type EmprendimientoUncheckedUpdateManyWithoutRela_emp_usuNestedInput = {
    create?: XOR<EmprendimientoCreateWithoutRela_emp_usuInput, EmprendimientoUncheckedCreateWithoutRela_emp_usuInput> | EmprendimientoCreateWithoutRela_emp_usuInput[] | EmprendimientoUncheckedCreateWithoutRela_emp_usuInput[]
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutRela_emp_usuInput | EmprendimientoCreateOrConnectWithoutRela_emp_usuInput[]
    upsert?: EmprendimientoUpsertWithWhereUniqueWithoutRela_emp_usuInput | EmprendimientoUpsertWithWhereUniqueWithoutRela_emp_usuInput[]
    createMany?: EmprendimientoCreateManyRela_emp_usuInputEnvelope
    set?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    disconnect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    delete?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    connect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    update?: EmprendimientoUpdateWithWhereUniqueWithoutRela_emp_usuInput | EmprendimientoUpdateWithWhereUniqueWithoutRela_emp_usuInput[]
    updateMany?: EmprendimientoUpdateManyWithWhereWithoutRela_emp_usuInput | EmprendimientoUpdateManyWithWhereWithoutRela_emp_usuInput[]
    deleteMany?: EmprendimientoScalarWhereInput | EmprendimientoScalarWhereInput[]
  }

  export type ContactosUncheckedUpdateManyWithoutPropietarioNestedInput = {
    create?: XOR<ContactosCreateWithoutPropietarioInput, ContactosUncheckedCreateWithoutPropietarioInput> | ContactosCreateWithoutPropietarioInput[] | ContactosUncheckedCreateWithoutPropietarioInput[]
    connectOrCreate?: ContactosCreateOrConnectWithoutPropietarioInput | ContactosCreateOrConnectWithoutPropietarioInput[]
    upsert?: ContactosUpsertWithWhereUniqueWithoutPropietarioInput | ContactosUpsertWithWhereUniqueWithoutPropietarioInput[]
    createMany?: ContactosCreateManyPropietarioInputEnvelope
    set?: ContactosWhereUniqueInput | ContactosWhereUniqueInput[]
    disconnect?: ContactosWhereUniqueInput | ContactosWhereUniqueInput[]
    delete?: ContactosWhereUniqueInput | ContactosWhereUniqueInput[]
    connect?: ContactosWhereUniqueInput | ContactosWhereUniqueInput[]
    update?: ContactosUpdateWithWhereUniqueWithoutPropietarioInput | ContactosUpdateWithWhereUniqueWithoutPropietarioInput[]
    updateMany?: ContactosUpdateManyWithWhereWithoutPropietarioInput | ContactosUpdateManyWithWhereWithoutPropietarioInput[]
    deleteMany?: ContactosScalarWhereInput | ContactosScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutEmprendimientoInput = {
    create?: XOR<UsuarioCreateWithoutEmprendimientoInput, UsuarioUncheckedCreateWithoutEmprendimientoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmprendimientoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type Typo_emprendimientoCreateNestedOneWithoutEmprendimientoInput = {
    create?: XOR<Typo_emprendimientoCreateWithoutEmprendimientoInput, Typo_emprendimientoUncheckedCreateWithoutEmprendimientoInput>
    connectOrCreate?: Typo_emprendimientoCreateOrConnectWithoutEmprendimientoInput
    connect?: Typo_emprendimientoWhereUniqueInput
  }

  export type Materiales_CySCreateNestedManyWithoutRela_EmpInput = {
    create?: XOR<Materiales_CySCreateWithoutRela_EmpInput, Materiales_CySUncheckedCreateWithoutRela_EmpInput> | Materiales_CySCreateWithoutRela_EmpInput[] | Materiales_CySUncheckedCreateWithoutRela_EmpInput[]
    connectOrCreate?: Materiales_CySCreateOrConnectWithoutRela_EmpInput | Materiales_CySCreateOrConnectWithoutRela_EmpInput[]
    createMany?: Materiales_CySCreateManyRela_EmpInputEnvelope
    connect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
  }

  export type Productos_CySCreateNestedManyWithoutRela_EmpInput = {
    create?: XOR<Productos_CySCreateWithoutRela_EmpInput, Productos_CySUncheckedCreateWithoutRela_EmpInput> | Productos_CySCreateWithoutRela_EmpInput[] | Productos_CySUncheckedCreateWithoutRela_EmpInput[]
    connectOrCreate?: Productos_CySCreateOrConnectWithoutRela_EmpInput | Productos_CySCreateOrConnectWithoutRela_EmpInput[]
    createMany?: Productos_CySCreateManyRela_EmpInputEnvelope
    connect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
  }

  export type Materiales_CySUncheckedCreateNestedManyWithoutRela_EmpInput = {
    create?: XOR<Materiales_CySCreateWithoutRela_EmpInput, Materiales_CySUncheckedCreateWithoutRela_EmpInput> | Materiales_CySCreateWithoutRela_EmpInput[] | Materiales_CySUncheckedCreateWithoutRela_EmpInput[]
    connectOrCreate?: Materiales_CySCreateOrConnectWithoutRela_EmpInput | Materiales_CySCreateOrConnectWithoutRela_EmpInput[]
    createMany?: Materiales_CySCreateManyRela_EmpInputEnvelope
    connect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
  }

  export type Productos_CySUncheckedCreateNestedManyWithoutRela_EmpInput = {
    create?: XOR<Productos_CySCreateWithoutRela_EmpInput, Productos_CySUncheckedCreateWithoutRela_EmpInput> | Productos_CySCreateWithoutRela_EmpInput[] | Productos_CySUncheckedCreateWithoutRela_EmpInput[]
    connectOrCreate?: Productos_CySCreateOrConnectWithoutRela_EmpInput | Productos_CySCreateOrConnectWithoutRela_EmpInput[]
    createMany?: Productos_CySCreateManyRela_EmpInputEnvelope
    connect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutEmprendimientoNestedInput = {
    create?: XOR<UsuarioCreateWithoutEmprendimientoInput, UsuarioUncheckedCreateWithoutEmprendimientoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmprendimientoInput
    upsert?: UsuarioUpsertWithoutEmprendimientoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEmprendimientoInput, UsuarioUpdateWithoutEmprendimientoInput>, UsuarioUncheckedUpdateWithoutEmprendimientoInput>
  }

  export type Typo_emprendimientoUpdateOneRequiredWithoutEmprendimientoNestedInput = {
    create?: XOR<Typo_emprendimientoCreateWithoutEmprendimientoInput, Typo_emprendimientoUncheckedCreateWithoutEmprendimientoInput>
    connectOrCreate?: Typo_emprendimientoCreateOrConnectWithoutEmprendimientoInput
    upsert?: Typo_emprendimientoUpsertWithoutEmprendimientoInput
    connect?: Typo_emprendimientoWhereUniqueInput
    update?: XOR<XOR<Typo_emprendimientoUpdateToOneWithWhereWithoutEmprendimientoInput, Typo_emprendimientoUpdateWithoutEmprendimientoInput>, Typo_emprendimientoUncheckedUpdateWithoutEmprendimientoInput>
  }

  export type Materiales_CySUpdateManyWithoutRela_EmpNestedInput = {
    create?: XOR<Materiales_CySCreateWithoutRela_EmpInput, Materiales_CySUncheckedCreateWithoutRela_EmpInput> | Materiales_CySCreateWithoutRela_EmpInput[] | Materiales_CySUncheckedCreateWithoutRela_EmpInput[]
    connectOrCreate?: Materiales_CySCreateOrConnectWithoutRela_EmpInput | Materiales_CySCreateOrConnectWithoutRela_EmpInput[]
    upsert?: Materiales_CySUpsertWithWhereUniqueWithoutRela_EmpInput | Materiales_CySUpsertWithWhereUniqueWithoutRela_EmpInput[]
    createMany?: Materiales_CySCreateManyRela_EmpInputEnvelope
    set?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    disconnect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    delete?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    connect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    update?: Materiales_CySUpdateWithWhereUniqueWithoutRela_EmpInput | Materiales_CySUpdateWithWhereUniqueWithoutRela_EmpInput[]
    updateMany?: Materiales_CySUpdateManyWithWhereWithoutRela_EmpInput | Materiales_CySUpdateManyWithWhereWithoutRela_EmpInput[]
    deleteMany?: Materiales_CySScalarWhereInput | Materiales_CySScalarWhereInput[]
  }

  export type Productos_CySUpdateManyWithoutRela_EmpNestedInput = {
    create?: XOR<Productos_CySCreateWithoutRela_EmpInput, Productos_CySUncheckedCreateWithoutRela_EmpInput> | Productos_CySCreateWithoutRela_EmpInput[] | Productos_CySUncheckedCreateWithoutRela_EmpInput[]
    connectOrCreate?: Productos_CySCreateOrConnectWithoutRela_EmpInput | Productos_CySCreateOrConnectWithoutRela_EmpInput[]
    upsert?: Productos_CySUpsertWithWhereUniqueWithoutRela_EmpInput | Productos_CySUpsertWithWhereUniqueWithoutRela_EmpInput[]
    createMany?: Productos_CySCreateManyRela_EmpInputEnvelope
    set?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    disconnect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    delete?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    connect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    update?: Productos_CySUpdateWithWhereUniqueWithoutRela_EmpInput | Productos_CySUpdateWithWhereUniqueWithoutRela_EmpInput[]
    updateMany?: Productos_CySUpdateManyWithWhereWithoutRela_EmpInput | Productos_CySUpdateManyWithWhereWithoutRela_EmpInput[]
    deleteMany?: Productos_CySScalarWhereInput | Productos_CySScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Materiales_CySUncheckedUpdateManyWithoutRela_EmpNestedInput = {
    create?: XOR<Materiales_CySCreateWithoutRela_EmpInput, Materiales_CySUncheckedCreateWithoutRela_EmpInput> | Materiales_CySCreateWithoutRela_EmpInput[] | Materiales_CySUncheckedCreateWithoutRela_EmpInput[]
    connectOrCreate?: Materiales_CySCreateOrConnectWithoutRela_EmpInput | Materiales_CySCreateOrConnectWithoutRela_EmpInput[]
    upsert?: Materiales_CySUpsertWithWhereUniqueWithoutRela_EmpInput | Materiales_CySUpsertWithWhereUniqueWithoutRela_EmpInput[]
    createMany?: Materiales_CySCreateManyRela_EmpInputEnvelope
    set?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    disconnect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    delete?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    connect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    update?: Materiales_CySUpdateWithWhereUniqueWithoutRela_EmpInput | Materiales_CySUpdateWithWhereUniqueWithoutRela_EmpInput[]
    updateMany?: Materiales_CySUpdateManyWithWhereWithoutRela_EmpInput | Materiales_CySUpdateManyWithWhereWithoutRela_EmpInput[]
    deleteMany?: Materiales_CySScalarWhereInput | Materiales_CySScalarWhereInput[]
  }

  export type Productos_CySUncheckedUpdateManyWithoutRela_EmpNestedInput = {
    create?: XOR<Productos_CySCreateWithoutRela_EmpInput, Productos_CySUncheckedCreateWithoutRela_EmpInput> | Productos_CySCreateWithoutRela_EmpInput[] | Productos_CySUncheckedCreateWithoutRela_EmpInput[]
    connectOrCreate?: Productos_CySCreateOrConnectWithoutRela_EmpInput | Productos_CySCreateOrConnectWithoutRela_EmpInput[]
    upsert?: Productos_CySUpsertWithWhereUniqueWithoutRela_EmpInput | Productos_CySUpsertWithWhereUniqueWithoutRela_EmpInput[]
    createMany?: Productos_CySCreateManyRela_EmpInputEnvelope
    set?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    disconnect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    delete?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    connect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    update?: Productos_CySUpdateWithWhereUniqueWithoutRela_EmpInput | Productos_CySUpdateWithWhereUniqueWithoutRela_EmpInput[]
    updateMany?: Productos_CySUpdateManyWithWhereWithoutRela_EmpInput | Productos_CySUpdateManyWithWhereWithoutRela_EmpInput[]
    deleteMany?: Productos_CySScalarWhereInput | Productos_CySScalarWhereInput[]
  }

  export type ProductosCreateNestedManyWithoutRela_prod_typoInput = {
    create?: XOR<ProductosCreateWithoutRela_prod_typoInput, ProductosUncheckedCreateWithoutRela_prod_typoInput> | ProductosCreateWithoutRela_prod_typoInput[] | ProductosUncheckedCreateWithoutRela_prod_typoInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutRela_prod_typoInput | ProductosCreateOrConnectWithoutRela_prod_typoInput[]
    createMany?: ProductosCreateManyRela_prod_typoInputEnvelope
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
  }

  export type EmprendimientoCreateNestedManyWithoutRela_emp_typoempInput = {
    create?: XOR<EmprendimientoCreateWithoutRela_emp_typoempInput, EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput> | EmprendimientoCreateWithoutRela_emp_typoempInput[] | EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput[]
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutRela_emp_typoempInput | EmprendimientoCreateOrConnectWithoutRela_emp_typoempInput[]
    createMany?: EmprendimientoCreateManyRela_emp_typoempInputEnvelope
    connect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
  }

  export type ProductosUncheckedCreateNestedManyWithoutRela_prod_typoInput = {
    create?: XOR<ProductosCreateWithoutRela_prod_typoInput, ProductosUncheckedCreateWithoutRela_prod_typoInput> | ProductosCreateWithoutRela_prod_typoInput[] | ProductosUncheckedCreateWithoutRela_prod_typoInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutRela_prod_typoInput | ProductosCreateOrConnectWithoutRela_prod_typoInput[]
    createMany?: ProductosCreateManyRela_prod_typoInputEnvelope
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
  }

  export type EmprendimientoUncheckedCreateNestedManyWithoutRela_emp_typoempInput = {
    create?: XOR<EmprendimientoCreateWithoutRela_emp_typoempInput, EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput> | EmprendimientoCreateWithoutRela_emp_typoempInput[] | EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput[]
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutRela_emp_typoempInput | EmprendimientoCreateOrConnectWithoutRela_emp_typoempInput[]
    createMany?: EmprendimientoCreateManyRela_emp_typoempInputEnvelope
    connect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
  }

  export type ProductosUpdateManyWithoutRela_prod_typoNestedInput = {
    create?: XOR<ProductosCreateWithoutRela_prod_typoInput, ProductosUncheckedCreateWithoutRela_prod_typoInput> | ProductosCreateWithoutRela_prod_typoInput[] | ProductosUncheckedCreateWithoutRela_prod_typoInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutRela_prod_typoInput | ProductosCreateOrConnectWithoutRela_prod_typoInput[]
    upsert?: ProductosUpsertWithWhereUniqueWithoutRela_prod_typoInput | ProductosUpsertWithWhereUniqueWithoutRela_prod_typoInput[]
    createMany?: ProductosCreateManyRela_prod_typoInputEnvelope
    set?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    disconnect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    delete?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    update?: ProductosUpdateWithWhereUniqueWithoutRela_prod_typoInput | ProductosUpdateWithWhereUniqueWithoutRela_prod_typoInput[]
    updateMany?: ProductosUpdateManyWithWhereWithoutRela_prod_typoInput | ProductosUpdateManyWithWhereWithoutRela_prod_typoInput[]
    deleteMany?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
  }

  export type EmprendimientoUpdateManyWithoutRela_emp_typoempNestedInput = {
    create?: XOR<EmprendimientoCreateWithoutRela_emp_typoempInput, EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput> | EmprendimientoCreateWithoutRela_emp_typoempInput[] | EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput[]
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutRela_emp_typoempInput | EmprendimientoCreateOrConnectWithoutRela_emp_typoempInput[]
    upsert?: EmprendimientoUpsertWithWhereUniqueWithoutRela_emp_typoempInput | EmprendimientoUpsertWithWhereUniqueWithoutRela_emp_typoempInput[]
    createMany?: EmprendimientoCreateManyRela_emp_typoempInputEnvelope
    set?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    disconnect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    delete?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    connect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    update?: EmprendimientoUpdateWithWhereUniqueWithoutRela_emp_typoempInput | EmprendimientoUpdateWithWhereUniqueWithoutRela_emp_typoempInput[]
    updateMany?: EmprendimientoUpdateManyWithWhereWithoutRela_emp_typoempInput | EmprendimientoUpdateManyWithWhereWithoutRela_emp_typoempInput[]
    deleteMany?: EmprendimientoScalarWhereInput | EmprendimientoScalarWhereInput[]
  }

  export type ProductosUncheckedUpdateManyWithoutRela_prod_typoNestedInput = {
    create?: XOR<ProductosCreateWithoutRela_prod_typoInput, ProductosUncheckedCreateWithoutRela_prod_typoInput> | ProductosCreateWithoutRela_prod_typoInput[] | ProductosUncheckedCreateWithoutRela_prod_typoInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutRela_prod_typoInput | ProductosCreateOrConnectWithoutRela_prod_typoInput[]
    upsert?: ProductosUpsertWithWhereUniqueWithoutRela_prod_typoInput | ProductosUpsertWithWhereUniqueWithoutRela_prod_typoInput[]
    createMany?: ProductosCreateManyRela_prod_typoInputEnvelope
    set?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    disconnect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    delete?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    update?: ProductosUpdateWithWhereUniqueWithoutRela_prod_typoInput | ProductosUpdateWithWhereUniqueWithoutRela_prod_typoInput[]
    updateMany?: ProductosUpdateManyWithWhereWithoutRela_prod_typoInput | ProductosUpdateManyWithWhereWithoutRela_prod_typoInput[]
    deleteMany?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
  }

  export type EmprendimientoUncheckedUpdateManyWithoutRela_emp_typoempNestedInput = {
    create?: XOR<EmprendimientoCreateWithoutRela_emp_typoempInput, EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput> | EmprendimientoCreateWithoutRela_emp_typoempInput[] | EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput[]
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutRela_emp_typoempInput | EmprendimientoCreateOrConnectWithoutRela_emp_typoempInput[]
    upsert?: EmprendimientoUpsertWithWhereUniqueWithoutRela_emp_typoempInput | EmprendimientoUpsertWithWhereUniqueWithoutRela_emp_typoempInput[]
    createMany?: EmprendimientoCreateManyRela_emp_typoempInputEnvelope
    set?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    disconnect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    delete?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    connect?: EmprendimientoWhereUniqueInput | EmprendimientoWhereUniqueInput[]
    update?: EmprendimientoUpdateWithWhereUniqueWithoutRela_emp_typoempInput | EmprendimientoUpdateWithWhereUniqueWithoutRela_emp_typoempInput[]
    updateMany?: EmprendimientoUpdateManyWithWhereWithoutRela_emp_typoempInput | EmprendimientoUpdateManyWithWhereWithoutRela_emp_typoempInput[]
    deleteMany?: EmprendimientoScalarWhereInput | EmprendimientoScalarWhereInput[]
  }

  export type Typo_emprendimientoCreateNestedOneWithoutProductoInput = {
    create?: XOR<Typo_emprendimientoCreateWithoutProductoInput, Typo_emprendimientoUncheckedCreateWithoutProductoInput>
    connectOrCreate?: Typo_emprendimientoCreateOrConnectWithoutProductoInput
    connect?: Typo_emprendimientoWhereUniqueInput
  }

  export type Prod_MatCreateNestedManyWithoutRela_PyMInput = {
    create?: XOR<Prod_MatCreateWithoutRela_PyMInput, Prod_MatUncheckedCreateWithoutRela_PyMInput> | Prod_MatCreateWithoutRela_PyMInput[] | Prod_MatUncheckedCreateWithoutRela_PyMInput[]
    connectOrCreate?: Prod_MatCreateOrConnectWithoutRela_PyMInput | Prod_MatCreateOrConnectWithoutRela_PyMInput[]
    createMany?: Prod_MatCreateManyRela_PyMInputEnvelope
    connect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
  }

  export type Productos_CySCreateNestedManyWithoutRela_ProdInput = {
    create?: XOR<Productos_CySCreateWithoutRela_ProdInput, Productos_CySUncheckedCreateWithoutRela_ProdInput> | Productos_CySCreateWithoutRela_ProdInput[] | Productos_CySUncheckedCreateWithoutRela_ProdInput[]
    connectOrCreate?: Productos_CySCreateOrConnectWithoutRela_ProdInput | Productos_CySCreateOrConnectWithoutRela_ProdInput[]
    createMany?: Productos_CySCreateManyRela_ProdInputEnvelope
    connect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
  }

  export type Prod_MatUncheckedCreateNestedManyWithoutRela_PyMInput = {
    create?: XOR<Prod_MatCreateWithoutRela_PyMInput, Prod_MatUncheckedCreateWithoutRela_PyMInput> | Prod_MatCreateWithoutRela_PyMInput[] | Prod_MatUncheckedCreateWithoutRela_PyMInput[]
    connectOrCreate?: Prod_MatCreateOrConnectWithoutRela_PyMInput | Prod_MatCreateOrConnectWithoutRela_PyMInput[]
    createMany?: Prod_MatCreateManyRela_PyMInputEnvelope
    connect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
  }

  export type Productos_CySUncheckedCreateNestedManyWithoutRela_ProdInput = {
    create?: XOR<Productos_CySCreateWithoutRela_ProdInput, Productos_CySUncheckedCreateWithoutRela_ProdInput> | Productos_CySCreateWithoutRela_ProdInput[] | Productos_CySUncheckedCreateWithoutRela_ProdInput[]
    connectOrCreate?: Productos_CySCreateOrConnectWithoutRela_ProdInput | Productos_CySCreateOrConnectWithoutRela_ProdInput[]
    createMany?: Productos_CySCreateManyRela_ProdInputEnvelope
    connect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
  }

  export type Typo_emprendimientoUpdateOneRequiredWithoutProductoNestedInput = {
    create?: XOR<Typo_emprendimientoCreateWithoutProductoInput, Typo_emprendimientoUncheckedCreateWithoutProductoInput>
    connectOrCreate?: Typo_emprendimientoCreateOrConnectWithoutProductoInput
    upsert?: Typo_emprendimientoUpsertWithoutProductoInput
    connect?: Typo_emprendimientoWhereUniqueInput
    update?: XOR<XOR<Typo_emprendimientoUpdateToOneWithWhereWithoutProductoInput, Typo_emprendimientoUpdateWithoutProductoInput>, Typo_emprendimientoUncheckedUpdateWithoutProductoInput>
  }

  export type Prod_MatUpdateManyWithoutRela_PyMNestedInput = {
    create?: XOR<Prod_MatCreateWithoutRela_PyMInput, Prod_MatUncheckedCreateWithoutRela_PyMInput> | Prod_MatCreateWithoutRela_PyMInput[] | Prod_MatUncheckedCreateWithoutRela_PyMInput[]
    connectOrCreate?: Prod_MatCreateOrConnectWithoutRela_PyMInput | Prod_MatCreateOrConnectWithoutRela_PyMInput[]
    upsert?: Prod_MatUpsertWithWhereUniqueWithoutRela_PyMInput | Prod_MatUpsertWithWhereUniqueWithoutRela_PyMInput[]
    createMany?: Prod_MatCreateManyRela_PyMInputEnvelope
    set?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    disconnect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    delete?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    connect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    update?: Prod_MatUpdateWithWhereUniqueWithoutRela_PyMInput | Prod_MatUpdateWithWhereUniqueWithoutRela_PyMInput[]
    updateMany?: Prod_MatUpdateManyWithWhereWithoutRela_PyMInput | Prod_MatUpdateManyWithWhereWithoutRela_PyMInput[]
    deleteMany?: Prod_MatScalarWhereInput | Prod_MatScalarWhereInput[]
  }

  export type Productos_CySUpdateManyWithoutRela_ProdNestedInput = {
    create?: XOR<Productos_CySCreateWithoutRela_ProdInput, Productos_CySUncheckedCreateWithoutRela_ProdInput> | Productos_CySCreateWithoutRela_ProdInput[] | Productos_CySUncheckedCreateWithoutRela_ProdInput[]
    connectOrCreate?: Productos_CySCreateOrConnectWithoutRela_ProdInput | Productos_CySCreateOrConnectWithoutRela_ProdInput[]
    upsert?: Productos_CySUpsertWithWhereUniqueWithoutRela_ProdInput | Productos_CySUpsertWithWhereUniqueWithoutRela_ProdInput[]
    createMany?: Productos_CySCreateManyRela_ProdInputEnvelope
    set?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    disconnect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    delete?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    connect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    update?: Productos_CySUpdateWithWhereUniqueWithoutRela_ProdInput | Productos_CySUpdateWithWhereUniqueWithoutRela_ProdInput[]
    updateMany?: Productos_CySUpdateManyWithWhereWithoutRela_ProdInput | Productos_CySUpdateManyWithWhereWithoutRela_ProdInput[]
    deleteMany?: Productos_CySScalarWhereInput | Productos_CySScalarWhereInput[]
  }

  export type Prod_MatUncheckedUpdateManyWithoutRela_PyMNestedInput = {
    create?: XOR<Prod_MatCreateWithoutRela_PyMInput, Prod_MatUncheckedCreateWithoutRela_PyMInput> | Prod_MatCreateWithoutRela_PyMInput[] | Prod_MatUncheckedCreateWithoutRela_PyMInput[]
    connectOrCreate?: Prod_MatCreateOrConnectWithoutRela_PyMInput | Prod_MatCreateOrConnectWithoutRela_PyMInput[]
    upsert?: Prod_MatUpsertWithWhereUniqueWithoutRela_PyMInput | Prod_MatUpsertWithWhereUniqueWithoutRela_PyMInput[]
    createMany?: Prod_MatCreateManyRela_PyMInputEnvelope
    set?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    disconnect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    delete?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    connect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    update?: Prod_MatUpdateWithWhereUniqueWithoutRela_PyMInput | Prod_MatUpdateWithWhereUniqueWithoutRela_PyMInput[]
    updateMany?: Prod_MatUpdateManyWithWhereWithoutRela_PyMInput | Prod_MatUpdateManyWithWhereWithoutRela_PyMInput[]
    deleteMany?: Prod_MatScalarWhereInput | Prod_MatScalarWhereInput[]
  }

  export type Productos_CySUncheckedUpdateManyWithoutRela_ProdNestedInput = {
    create?: XOR<Productos_CySCreateWithoutRela_ProdInput, Productos_CySUncheckedCreateWithoutRela_ProdInput> | Productos_CySCreateWithoutRela_ProdInput[] | Productos_CySUncheckedCreateWithoutRela_ProdInput[]
    connectOrCreate?: Productos_CySCreateOrConnectWithoutRela_ProdInput | Productos_CySCreateOrConnectWithoutRela_ProdInput[]
    upsert?: Productos_CySUpsertWithWhereUniqueWithoutRela_ProdInput | Productos_CySUpsertWithWhereUniqueWithoutRela_ProdInput[]
    createMany?: Productos_CySCreateManyRela_ProdInputEnvelope
    set?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    disconnect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    delete?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    connect?: Productos_CySWhereUniqueInput | Productos_CySWhereUniqueInput[]
    update?: Productos_CySUpdateWithWhereUniqueWithoutRela_ProdInput | Productos_CySUpdateWithWhereUniqueWithoutRela_ProdInput[]
    updateMany?: Productos_CySUpdateManyWithWhereWithoutRela_ProdInput | Productos_CySUpdateManyWithWhereWithoutRela_ProdInput[]
    deleteMany?: Productos_CySScalarWhereInput | Productos_CySScalarWhereInput[]
  }

  export type ProductosCreateNestedOneWithoutProducto_CySInput = {
    create?: XOR<ProductosCreateWithoutProducto_CySInput, ProductosUncheckedCreateWithoutProducto_CySInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutProducto_CySInput
    connect?: ProductosWhereUniqueInput
  }

  export type EmprendimientoCreateNestedOneWithoutProducto_CySInput = {
    create?: XOR<EmprendimientoCreateWithoutProducto_CySInput, EmprendimientoUncheckedCreateWithoutProducto_CySInput>
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutProducto_CySInput
    connect?: EmprendimientoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductosUpdateOneRequiredWithoutProducto_CySNestedInput = {
    create?: XOR<ProductosCreateWithoutProducto_CySInput, ProductosUncheckedCreateWithoutProducto_CySInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutProducto_CySInput
    upsert?: ProductosUpsertWithoutProducto_CySInput
    connect?: ProductosWhereUniqueInput
    update?: XOR<XOR<ProductosUpdateToOneWithWhereWithoutProducto_CySInput, ProductosUpdateWithoutProducto_CySInput>, ProductosUncheckedUpdateWithoutProducto_CySInput>
  }

  export type EmprendimientoUpdateOneRequiredWithoutProducto_CySNestedInput = {
    create?: XOR<EmprendimientoCreateWithoutProducto_CySInput, EmprendimientoUncheckedCreateWithoutProducto_CySInput>
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutProducto_CySInput
    upsert?: EmprendimientoUpsertWithoutProducto_CySInput
    connect?: EmprendimientoWhereUniqueInput
    update?: XOR<XOR<EmprendimientoUpdateToOneWithWhereWithoutProducto_CySInput, EmprendimientoUpdateWithoutProducto_CySInput>, EmprendimientoUncheckedUpdateWithoutProducto_CySInput>
  }

  export type ProductosCreateNestedOneWithoutProd_matInput = {
    create?: XOR<ProductosCreateWithoutProd_matInput, ProductosUncheckedCreateWithoutProd_matInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutProd_matInput
    connect?: ProductosWhereUniqueInput
  }

  export type MaterialesCreateNestedOneWithoutProd_matInput = {
    create?: XOR<MaterialesCreateWithoutProd_matInput, MaterialesUncheckedCreateWithoutProd_matInput>
    connectOrCreate?: MaterialesCreateOrConnectWithoutProd_matInput
    connect?: MaterialesWhereUniqueInput
  }

  export type ProductosUpdateOneRequiredWithoutProd_matNestedInput = {
    create?: XOR<ProductosCreateWithoutProd_matInput, ProductosUncheckedCreateWithoutProd_matInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutProd_matInput
    upsert?: ProductosUpsertWithoutProd_matInput
    connect?: ProductosWhereUniqueInput
    update?: XOR<XOR<ProductosUpdateToOneWithWhereWithoutProd_matInput, ProductosUpdateWithoutProd_matInput>, ProductosUncheckedUpdateWithoutProd_matInput>
  }

  export type MaterialesUpdateOneRequiredWithoutProd_matNestedInput = {
    create?: XOR<MaterialesCreateWithoutProd_matInput, MaterialesUncheckedCreateWithoutProd_matInput>
    connectOrCreate?: MaterialesCreateOrConnectWithoutProd_matInput
    upsert?: MaterialesUpsertWithoutProd_matInput
    connect?: MaterialesWhereUniqueInput
    update?: XOR<XOR<MaterialesUpdateToOneWithWhereWithoutProd_matInput, MaterialesUpdateWithoutProd_matInput>, MaterialesUncheckedUpdateWithoutProd_matInput>
  }

  export type Prod_MatCreateNestedManyWithoutRela_MyPInput = {
    create?: XOR<Prod_MatCreateWithoutRela_MyPInput, Prod_MatUncheckedCreateWithoutRela_MyPInput> | Prod_MatCreateWithoutRela_MyPInput[] | Prod_MatUncheckedCreateWithoutRela_MyPInput[]
    connectOrCreate?: Prod_MatCreateOrConnectWithoutRela_MyPInput | Prod_MatCreateOrConnectWithoutRela_MyPInput[]
    createMany?: Prod_MatCreateManyRela_MyPInputEnvelope
    connect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
  }

  export type Materiales_CySCreateNestedManyWithoutRela_MatInput = {
    create?: XOR<Materiales_CySCreateWithoutRela_MatInput, Materiales_CySUncheckedCreateWithoutRela_MatInput> | Materiales_CySCreateWithoutRela_MatInput[] | Materiales_CySUncheckedCreateWithoutRela_MatInput[]
    connectOrCreate?: Materiales_CySCreateOrConnectWithoutRela_MatInput | Materiales_CySCreateOrConnectWithoutRela_MatInput[]
    createMany?: Materiales_CySCreateManyRela_MatInputEnvelope
    connect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
  }

  export type Prod_MatUncheckedCreateNestedManyWithoutRela_MyPInput = {
    create?: XOR<Prod_MatCreateWithoutRela_MyPInput, Prod_MatUncheckedCreateWithoutRela_MyPInput> | Prod_MatCreateWithoutRela_MyPInput[] | Prod_MatUncheckedCreateWithoutRela_MyPInput[]
    connectOrCreate?: Prod_MatCreateOrConnectWithoutRela_MyPInput | Prod_MatCreateOrConnectWithoutRela_MyPInput[]
    createMany?: Prod_MatCreateManyRela_MyPInputEnvelope
    connect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
  }

  export type Materiales_CySUncheckedCreateNestedManyWithoutRela_MatInput = {
    create?: XOR<Materiales_CySCreateWithoutRela_MatInput, Materiales_CySUncheckedCreateWithoutRela_MatInput> | Materiales_CySCreateWithoutRela_MatInput[] | Materiales_CySUncheckedCreateWithoutRela_MatInput[]
    connectOrCreate?: Materiales_CySCreateOrConnectWithoutRela_MatInput | Materiales_CySCreateOrConnectWithoutRela_MatInput[]
    createMany?: Materiales_CySCreateManyRela_MatInputEnvelope
    connect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
  }

  export type Prod_MatUpdateManyWithoutRela_MyPNestedInput = {
    create?: XOR<Prod_MatCreateWithoutRela_MyPInput, Prod_MatUncheckedCreateWithoutRela_MyPInput> | Prod_MatCreateWithoutRela_MyPInput[] | Prod_MatUncheckedCreateWithoutRela_MyPInput[]
    connectOrCreate?: Prod_MatCreateOrConnectWithoutRela_MyPInput | Prod_MatCreateOrConnectWithoutRela_MyPInput[]
    upsert?: Prod_MatUpsertWithWhereUniqueWithoutRela_MyPInput | Prod_MatUpsertWithWhereUniqueWithoutRela_MyPInput[]
    createMany?: Prod_MatCreateManyRela_MyPInputEnvelope
    set?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    disconnect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    delete?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    connect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    update?: Prod_MatUpdateWithWhereUniqueWithoutRela_MyPInput | Prod_MatUpdateWithWhereUniqueWithoutRela_MyPInput[]
    updateMany?: Prod_MatUpdateManyWithWhereWithoutRela_MyPInput | Prod_MatUpdateManyWithWhereWithoutRela_MyPInput[]
    deleteMany?: Prod_MatScalarWhereInput | Prod_MatScalarWhereInput[]
  }

  export type Materiales_CySUpdateManyWithoutRela_MatNestedInput = {
    create?: XOR<Materiales_CySCreateWithoutRela_MatInput, Materiales_CySUncheckedCreateWithoutRela_MatInput> | Materiales_CySCreateWithoutRela_MatInput[] | Materiales_CySUncheckedCreateWithoutRela_MatInput[]
    connectOrCreate?: Materiales_CySCreateOrConnectWithoutRela_MatInput | Materiales_CySCreateOrConnectWithoutRela_MatInput[]
    upsert?: Materiales_CySUpsertWithWhereUniqueWithoutRela_MatInput | Materiales_CySUpsertWithWhereUniqueWithoutRela_MatInput[]
    createMany?: Materiales_CySCreateManyRela_MatInputEnvelope
    set?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    disconnect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    delete?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    connect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    update?: Materiales_CySUpdateWithWhereUniqueWithoutRela_MatInput | Materiales_CySUpdateWithWhereUniqueWithoutRela_MatInput[]
    updateMany?: Materiales_CySUpdateManyWithWhereWithoutRela_MatInput | Materiales_CySUpdateManyWithWhereWithoutRela_MatInput[]
    deleteMany?: Materiales_CySScalarWhereInput | Materiales_CySScalarWhereInput[]
  }

  export type Prod_MatUncheckedUpdateManyWithoutRela_MyPNestedInput = {
    create?: XOR<Prod_MatCreateWithoutRela_MyPInput, Prod_MatUncheckedCreateWithoutRela_MyPInput> | Prod_MatCreateWithoutRela_MyPInput[] | Prod_MatUncheckedCreateWithoutRela_MyPInput[]
    connectOrCreate?: Prod_MatCreateOrConnectWithoutRela_MyPInput | Prod_MatCreateOrConnectWithoutRela_MyPInput[]
    upsert?: Prod_MatUpsertWithWhereUniqueWithoutRela_MyPInput | Prod_MatUpsertWithWhereUniqueWithoutRela_MyPInput[]
    createMany?: Prod_MatCreateManyRela_MyPInputEnvelope
    set?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    disconnect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    delete?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    connect?: Prod_MatWhereUniqueInput | Prod_MatWhereUniqueInput[]
    update?: Prod_MatUpdateWithWhereUniqueWithoutRela_MyPInput | Prod_MatUpdateWithWhereUniqueWithoutRela_MyPInput[]
    updateMany?: Prod_MatUpdateManyWithWhereWithoutRela_MyPInput | Prod_MatUpdateManyWithWhereWithoutRela_MyPInput[]
    deleteMany?: Prod_MatScalarWhereInput | Prod_MatScalarWhereInput[]
  }

  export type Materiales_CySUncheckedUpdateManyWithoutRela_MatNestedInput = {
    create?: XOR<Materiales_CySCreateWithoutRela_MatInput, Materiales_CySUncheckedCreateWithoutRela_MatInput> | Materiales_CySCreateWithoutRela_MatInput[] | Materiales_CySUncheckedCreateWithoutRela_MatInput[]
    connectOrCreate?: Materiales_CySCreateOrConnectWithoutRela_MatInput | Materiales_CySCreateOrConnectWithoutRela_MatInput[]
    upsert?: Materiales_CySUpsertWithWhereUniqueWithoutRela_MatInput | Materiales_CySUpsertWithWhereUniqueWithoutRela_MatInput[]
    createMany?: Materiales_CySCreateManyRela_MatInputEnvelope
    set?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    disconnect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    delete?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    connect?: Materiales_CySWhereUniqueInput | Materiales_CySWhereUniqueInput[]
    update?: Materiales_CySUpdateWithWhereUniqueWithoutRela_MatInput | Materiales_CySUpdateWithWhereUniqueWithoutRela_MatInput[]
    updateMany?: Materiales_CySUpdateManyWithWhereWithoutRela_MatInput | Materiales_CySUpdateManyWithWhereWithoutRela_MatInput[]
    deleteMany?: Materiales_CySScalarWhereInput | Materiales_CySScalarWhereInput[]
  }

  export type MaterialesCreateNestedOneWithoutMateriales_CySInput = {
    create?: XOR<MaterialesCreateWithoutMateriales_CySInput, MaterialesUncheckedCreateWithoutMateriales_CySInput>
    connectOrCreate?: MaterialesCreateOrConnectWithoutMateriales_CySInput
    connect?: MaterialesWhereUniqueInput
  }

  export type EmprendimientoCreateNestedOneWithoutMaterial_CySInput = {
    create?: XOR<EmprendimientoCreateWithoutMaterial_CySInput, EmprendimientoUncheckedCreateWithoutMaterial_CySInput>
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutMaterial_CySInput
    connect?: EmprendimientoWhereUniqueInput
  }

  export type MaterialesUpdateOneRequiredWithoutMateriales_CySNestedInput = {
    create?: XOR<MaterialesCreateWithoutMateriales_CySInput, MaterialesUncheckedCreateWithoutMateriales_CySInput>
    connectOrCreate?: MaterialesCreateOrConnectWithoutMateriales_CySInput
    upsert?: MaterialesUpsertWithoutMateriales_CySInput
    connect?: MaterialesWhereUniqueInput
    update?: XOR<XOR<MaterialesUpdateToOneWithWhereWithoutMateriales_CySInput, MaterialesUpdateWithoutMateriales_CySInput>, MaterialesUncheckedUpdateWithoutMateriales_CySInput>
  }

  export type EmprendimientoUpdateOneRequiredWithoutMaterial_CySNestedInput = {
    create?: XOR<EmprendimientoCreateWithoutMaterial_CySInput, EmprendimientoUncheckedCreateWithoutMaterial_CySInput>
    connectOrCreate?: EmprendimientoCreateOrConnectWithoutMaterial_CySInput
    upsert?: EmprendimientoUpsertWithoutMaterial_CySInput
    connect?: EmprendimientoWhereUniqueInput
    update?: XOR<XOR<EmprendimientoUpdateToOneWithWhereWithoutMaterial_CySInput, EmprendimientoUpdateWithoutMaterial_CySInput>, EmprendimientoUncheckedUpdateWithoutMaterial_CySInput>
  }

  export type UsuarioCreateNestedOneWithoutContactosInput = {
    create?: XOR<UsuarioCreateWithoutContactosInput, UsuarioUncheckedCreateWithoutContactosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutContactosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutContactosNestedInput = {
    create?: XOR<UsuarioCreateWithoutContactosInput, UsuarioUncheckedCreateWithoutContactosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutContactosInput
    upsert?: UsuarioUpsertWithoutContactosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutContactosInput, UsuarioUpdateWithoutContactosInput>, UsuarioUncheckedUpdateWithoutContactosInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EmprendimientoCreateWithoutRela_emp_usuInput = {
    nombreEmp: string
    colores?: string | null
    rela_emp_typoemp: Typo_emprendimientoCreateNestedOneWithoutEmprendimientoInput
    material_CyS?: Materiales_CySCreateNestedManyWithoutRela_EmpInput
    producto_CyS?: Productos_CySCreateNestedManyWithoutRela_EmpInput
  }

  export type EmprendimientoUncheckedCreateWithoutRela_emp_usuInput = {
    Id?: number
    nombreEmp: string
    colores?: string | null
    tipo: string
    material_CyS?: Materiales_CySUncheckedCreateNestedManyWithoutRela_EmpInput
    producto_CyS?: Productos_CySUncheckedCreateNestedManyWithoutRela_EmpInput
  }

  export type EmprendimientoCreateOrConnectWithoutRela_emp_usuInput = {
    where: EmprendimientoWhereUniqueInput
    create: XOR<EmprendimientoCreateWithoutRela_emp_usuInput, EmprendimientoUncheckedCreateWithoutRela_emp_usuInput>
  }

  export type EmprendimientoCreateManyRela_emp_usuInputEnvelope = {
    data: EmprendimientoCreateManyRela_emp_usuInput | EmprendimientoCreateManyRela_emp_usuInput[]
    skipDuplicates?: boolean
  }

  export type ContactosCreateWithoutPropietarioInput = {
    nombre: string
    email?: string | null
    telefono?: number | null
    redes_soc?: string | null
    notas_perz?: string | null
    foto?: string | null
  }

  export type ContactosUncheckedCreateWithoutPropietarioInput = {
    Id?: number
    nombre: string
    email?: string | null
    telefono?: number | null
    redes_soc?: string | null
    notas_perz?: string | null
    foto?: string | null
  }

  export type ContactosCreateOrConnectWithoutPropietarioInput = {
    where: ContactosWhereUniqueInput
    create: XOR<ContactosCreateWithoutPropietarioInput, ContactosUncheckedCreateWithoutPropietarioInput>
  }

  export type ContactosCreateManyPropietarioInputEnvelope = {
    data: ContactosCreateManyPropietarioInput | ContactosCreateManyPropietarioInput[]
    skipDuplicates?: boolean
  }

  export type EmprendimientoUpsertWithWhereUniqueWithoutRela_emp_usuInput = {
    where: EmprendimientoWhereUniqueInput
    update: XOR<EmprendimientoUpdateWithoutRela_emp_usuInput, EmprendimientoUncheckedUpdateWithoutRela_emp_usuInput>
    create: XOR<EmprendimientoCreateWithoutRela_emp_usuInput, EmprendimientoUncheckedCreateWithoutRela_emp_usuInput>
  }

  export type EmprendimientoUpdateWithWhereUniqueWithoutRela_emp_usuInput = {
    where: EmprendimientoWhereUniqueInput
    data: XOR<EmprendimientoUpdateWithoutRela_emp_usuInput, EmprendimientoUncheckedUpdateWithoutRela_emp_usuInput>
  }

  export type EmprendimientoUpdateManyWithWhereWithoutRela_emp_usuInput = {
    where: EmprendimientoScalarWhereInput
    data: XOR<EmprendimientoUpdateManyMutationInput, EmprendimientoUncheckedUpdateManyWithoutRela_emp_usuInput>
  }

  export type EmprendimientoScalarWhereInput = {
    AND?: EmprendimientoScalarWhereInput | EmprendimientoScalarWhereInput[]
    OR?: EmprendimientoScalarWhereInput[]
    NOT?: EmprendimientoScalarWhereInput | EmprendimientoScalarWhereInput[]
    Id?: IntFilter<"Emprendimiento"> | number
    nombreEmp?: StringFilter<"Emprendimiento"> | string
    colores?: StringNullableFilter<"Emprendimiento"> | string | null
    usuario?: StringFilter<"Emprendimiento"> | string
    tipo?: StringFilter<"Emprendimiento"> | string
  }

  export type ContactosUpsertWithWhereUniqueWithoutPropietarioInput = {
    where: ContactosWhereUniqueInput
    update: XOR<ContactosUpdateWithoutPropietarioInput, ContactosUncheckedUpdateWithoutPropietarioInput>
    create: XOR<ContactosCreateWithoutPropietarioInput, ContactosUncheckedCreateWithoutPropietarioInput>
  }

  export type ContactosUpdateWithWhereUniqueWithoutPropietarioInput = {
    where: ContactosWhereUniqueInput
    data: XOR<ContactosUpdateWithoutPropietarioInput, ContactosUncheckedUpdateWithoutPropietarioInput>
  }

  export type ContactosUpdateManyWithWhereWithoutPropietarioInput = {
    where: ContactosScalarWhereInput
    data: XOR<ContactosUpdateManyMutationInput, ContactosUncheckedUpdateManyWithoutPropietarioInput>
  }

  export type ContactosScalarWhereInput = {
    AND?: ContactosScalarWhereInput | ContactosScalarWhereInput[]
    OR?: ContactosScalarWhereInput[]
    NOT?: ContactosScalarWhereInput | ContactosScalarWhereInput[]
    Id?: IntFilter<"Contactos"> | number
    nombre?: StringFilter<"Contactos"> | string
    email?: StringNullableFilter<"Contactos"> | string | null
    telefono?: IntNullableFilter<"Contactos"> | number | null
    redes_soc?: StringNullableFilter<"Contactos"> | string | null
    notas_perz?: StringNullableFilter<"Contactos"> | string | null
    foto?: StringNullableFilter<"Contactos"> | string | null
    host?: StringFilter<"Contactos"> | string
  }

  export type UsuarioCreateWithoutEmprendimientoInput = {
    email: string
    contasena: string
    nombreUsu: string
    foto?: string | null
    contactos?: ContactosCreateNestedManyWithoutPropietarioInput
  }

  export type UsuarioUncheckedCreateWithoutEmprendimientoInput = {
    email: string
    contasena: string
    nombreUsu: string
    foto?: string | null
    contactos?: ContactosUncheckedCreateNestedManyWithoutPropietarioInput
  }

  export type UsuarioCreateOrConnectWithoutEmprendimientoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEmprendimientoInput, UsuarioUncheckedCreateWithoutEmprendimientoInput>
  }

  export type Typo_emprendimientoCreateWithoutEmprendimientoInput = {
    typo: string
    descripcion: string
    foto?: string | null
    producto?: ProductosCreateNestedManyWithoutRela_prod_typoInput
  }

  export type Typo_emprendimientoUncheckedCreateWithoutEmprendimientoInput = {
    typo: string
    descripcion: string
    foto?: string | null
    producto?: ProductosUncheckedCreateNestedManyWithoutRela_prod_typoInput
  }

  export type Typo_emprendimientoCreateOrConnectWithoutEmprendimientoInput = {
    where: Typo_emprendimientoWhereUniqueInput
    create: XOR<Typo_emprendimientoCreateWithoutEmprendimientoInput, Typo_emprendimientoUncheckedCreateWithoutEmprendimientoInput>
  }

  export type Materiales_CySCreateWithoutRela_EmpInput = {
    costo?: string | null
    stock?: number | null
    rela_Mat: MaterialesCreateNestedOneWithoutMateriales_CySInput
  }

  export type Materiales_CySUncheckedCreateWithoutRela_EmpInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    materiales: string
  }

  export type Materiales_CySCreateOrConnectWithoutRela_EmpInput = {
    where: Materiales_CySWhereUniqueInput
    create: XOR<Materiales_CySCreateWithoutRela_EmpInput, Materiales_CySUncheckedCreateWithoutRela_EmpInput>
  }

  export type Materiales_CySCreateManyRela_EmpInputEnvelope = {
    data: Materiales_CySCreateManyRela_EmpInput | Materiales_CySCreateManyRela_EmpInput[]
    skipDuplicates?: boolean
  }

  export type Productos_CySCreateWithoutRela_EmpInput = {
    costo?: string | null
    stock?: number | null
    rela_Prod: ProductosCreateNestedOneWithoutProducto_CySInput
  }

  export type Productos_CySUncheckedCreateWithoutRela_EmpInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    producto: string
  }

  export type Productos_CySCreateOrConnectWithoutRela_EmpInput = {
    where: Productos_CySWhereUniqueInput
    create: XOR<Productos_CySCreateWithoutRela_EmpInput, Productos_CySUncheckedCreateWithoutRela_EmpInput>
  }

  export type Productos_CySCreateManyRela_EmpInputEnvelope = {
    data: Productos_CySCreateManyRela_EmpInput | Productos_CySCreateManyRela_EmpInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutEmprendimientoInput = {
    update: XOR<UsuarioUpdateWithoutEmprendimientoInput, UsuarioUncheckedUpdateWithoutEmprendimientoInput>
    create: XOR<UsuarioCreateWithoutEmprendimientoInput, UsuarioUncheckedCreateWithoutEmprendimientoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEmprendimientoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEmprendimientoInput, UsuarioUncheckedUpdateWithoutEmprendimientoInput>
  }

  export type UsuarioUpdateWithoutEmprendimientoInput = {
    email?: StringFieldUpdateOperationsInput | string
    contasena?: StringFieldUpdateOperationsInput | string
    nombreUsu?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    contactos?: ContactosUpdateManyWithoutPropietarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEmprendimientoInput = {
    email?: StringFieldUpdateOperationsInput | string
    contasena?: StringFieldUpdateOperationsInput | string
    nombreUsu?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    contactos?: ContactosUncheckedUpdateManyWithoutPropietarioNestedInput
  }

  export type Typo_emprendimientoUpsertWithoutEmprendimientoInput = {
    update: XOR<Typo_emprendimientoUpdateWithoutEmprendimientoInput, Typo_emprendimientoUncheckedUpdateWithoutEmprendimientoInput>
    create: XOR<Typo_emprendimientoCreateWithoutEmprendimientoInput, Typo_emprendimientoUncheckedCreateWithoutEmprendimientoInput>
    where?: Typo_emprendimientoWhereInput
  }

  export type Typo_emprendimientoUpdateToOneWithWhereWithoutEmprendimientoInput = {
    where?: Typo_emprendimientoWhereInput
    data: XOR<Typo_emprendimientoUpdateWithoutEmprendimientoInput, Typo_emprendimientoUncheckedUpdateWithoutEmprendimientoInput>
  }

  export type Typo_emprendimientoUpdateWithoutEmprendimientoInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    producto?: ProductosUpdateManyWithoutRela_prod_typoNestedInput
  }

  export type Typo_emprendimientoUncheckedUpdateWithoutEmprendimientoInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    producto?: ProductosUncheckedUpdateManyWithoutRela_prod_typoNestedInput
  }

  export type Materiales_CySUpsertWithWhereUniqueWithoutRela_EmpInput = {
    where: Materiales_CySWhereUniqueInput
    update: XOR<Materiales_CySUpdateWithoutRela_EmpInput, Materiales_CySUncheckedUpdateWithoutRela_EmpInput>
    create: XOR<Materiales_CySCreateWithoutRela_EmpInput, Materiales_CySUncheckedCreateWithoutRela_EmpInput>
  }

  export type Materiales_CySUpdateWithWhereUniqueWithoutRela_EmpInput = {
    where: Materiales_CySWhereUniqueInput
    data: XOR<Materiales_CySUpdateWithoutRela_EmpInput, Materiales_CySUncheckedUpdateWithoutRela_EmpInput>
  }

  export type Materiales_CySUpdateManyWithWhereWithoutRela_EmpInput = {
    where: Materiales_CySScalarWhereInput
    data: XOR<Materiales_CySUpdateManyMutationInput, Materiales_CySUncheckedUpdateManyWithoutRela_EmpInput>
  }

  export type Materiales_CySScalarWhereInput = {
    AND?: Materiales_CySScalarWhereInput | Materiales_CySScalarWhereInput[]
    OR?: Materiales_CySScalarWhereInput[]
    NOT?: Materiales_CySScalarWhereInput | Materiales_CySScalarWhereInput[]
    Id?: IntFilter<"Materiales_CyS"> | number
    costo?: StringNullableFilter<"Materiales_CyS"> | string | null
    stock?: IntNullableFilter<"Materiales_CyS"> | number | null
    materiales?: StringFilter<"Materiales_CyS"> | string
    emprendimiento?: IntFilter<"Materiales_CyS"> | number
  }

  export type Productos_CySUpsertWithWhereUniqueWithoutRela_EmpInput = {
    where: Productos_CySWhereUniqueInput
    update: XOR<Productos_CySUpdateWithoutRela_EmpInput, Productos_CySUncheckedUpdateWithoutRela_EmpInput>
    create: XOR<Productos_CySCreateWithoutRela_EmpInput, Productos_CySUncheckedCreateWithoutRela_EmpInput>
  }

  export type Productos_CySUpdateWithWhereUniqueWithoutRela_EmpInput = {
    where: Productos_CySWhereUniqueInput
    data: XOR<Productos_CySUpdateWithoutRela_EmpInput, Productos_CySUncheckedUpdateWithoutRela_EmpInput>
  }

  export type Productos_CySUpdateManyWithWhereWithoutRela_EmpInput = {
    where: Productos_CySScalarWhereInput
    data: XOR<Productos_CySUpdateManyMutationInput, Productos_CySUncheckedUpdateManyWithoutRela_EmpInput>
  }

  export type Productos_CySScalarWhereInput = {
    AND?: Productos_CySScalarWhereInput | Productos_CySScalarWhereInput[]
    OR?: Productos_CySScalarWhereInput[]
    NOT?: Productos_CySScalarWhereInput | Productos_CySScalarWhereInput[]
    Id?: IntFilter<"Productos_CyS"> | number
    costo?: StringNullableFilter<"Productos_CyS"> | string | null
    stock?: IntNullableFilter<"Productos_CyS"> | number | null
    producto?: StringFilter<"Productos_CyS"> | string
    emprendimiento?: IntFilter<"Productos_CyS"> | number
  }

  export type ProductosCreateWithoutRela_prod_typoInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    prod_mat?: Prod_MatCreateNestedManyWithoutRela_PyMInput
    producto_CyS?: Productos_CySCreateNestedManyWithoutRela_ProdInput
  }

  export type ProductosUncheckedCreateWithoutRela_prod_typoInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    prod_mat?: Prod_MatUncheckedCreateNestedManyWithoutRela_PyMInput
    producto_CyS?: Productos_CySUncheckedCreateNestedManyWithoutRela_ProdInput
  }

  export type ProductosCreateOrConnectWithoutRela_prod_typoInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutRela_prod_typoInput, ProductosUncheckedCreateWithoutRela_prod_typoInput>
  }

  export type ProductosCreateManyRela_prod_typoInputEnvelope = {
    data: ProductosCreateManyRela_prod_typoInput | ProductosCreateManyRela_prod_typoInput[]
    skipDuplicates?: boolean
  }

  export type EmprendimientoCreateWithoutRela_emp_typoempInput = {
    nombreEmp: string
    colores?: string | null
    rela_emp_usu: UsuarioCreateNestedOneWithoutEmprendimientoInput
    material_CyS?: Materiales_CySCreateNestedManyWithoutRela_EmpInput
    producto_CyS?: Productos_CySCreateNestedManyWithoutRela_EmpInput
  }

  export type EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput = {
    Id?: number
    nombreEmp: string
    colores?: string | null
    usuario: string
    material_CyS?: Materiales_CySUncheckedCreateNestedManyWithoutRela_EmpInput
    producto_CyS?: Productos_CySUncheckedCreateNestedManyWithoutRela_EmpInput
  }

  export type EmprendimientoCreateOrConnectWithoutRela_emp_typoempInput = {
    where: EmprendimientoWhereUniqueInput
    create: XOR<EmprendimientoCreateWithoutRela_emp_typoempInput, EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput>
  }

  export type EmprendimientoCreateManyRela_emp_typoempInputEnvelope = {
    data: EmprendimientoCreateManyRela_emp_typoempInput | EmprendimientoCreateManyRela_emp_typoempInput[]
    skipDuplicates?: boolean
  }

  export type ProductosUpsertWithWhereUniqueWithoutRela_prod_typoInput = {
    where: ProductosWhereUniqueInput
    update: XOR<ProductosUpdateWithoutRela_prod_typoInput, ProductosUncheckedUpdateWithoutRela_prod_typoInput>
    create: XOR<ProductosCreateWithoutRela_prod_typoInput, ProductosUncheckedCreateWithoutRela_prod_typoInput>
  }

  export type ProductosUpdateWithWhereUniqueWithoutRela_prod_typoInput = {
    where: ProductosWhereUniqueInput
    data: XOR<ProductosUpdateWithoutRela_prod_typoInput, ProductosUncheckedUpdateWithoutRela_prod_typoInput>
  }

  export type ProductosUpdateManyWithWhereWithoutRela_prod_typoInput = {
    where: ProductosScalarWhereInput
    data: XOR<ProductosUpdateManyMutationInput, ProductosUncheckedUpdateManyWithoutRela_prod_typoInput>
  }

  export type ProductosScalarWhereInput = {
    AND?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
    OR?: ProductosScalarWhereInput[]
    NOT?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
    nombre?: StringFilter<"Productos"> | string
    descripcion?: StringFilter<"Productos"> | string
    pasos?: StringFilter<"Productos"> | string
    herramientas?: StringFilter<"Productos"> | string
    foto?: StringNullableFilter<"Productos"> | string | null
    tipo?: StringFilter<"Productos"> | string
  }

  export type EmprendimientoUpsertWithWhereUniqueWithoutRela_emp_typoempInput = {
    where: EmprendimientoWhereUniqueInput
    update: XOR<EmprendimientoUpdateWithoutRela_emp_typoempInput, EmprendimientoUncheckedUpdateWithoutRela_emp_typoempInput>
    create: XOR<EmprendimientoCreateWithoutRela_emp_typoempInput, EmprendimientoUncheckedCreateWithoutRela_emp_typoempInput>
  }

  export type EmprendimientoUpdateWithWhereUniqueWithoutRela_emp_typoempInput = {
    where: EmprendimientoWhereUniqueInput
    data: XOR<EmprendimientoUpdateWithoutRela_emp_typoempInput, EmprendimientoUncheckedUpdateWithoutRela_emp_typoempInput>
  }

  export type EmprendimientoUpdateManyWithWhereWithoutRela_emp_typoempInput = {
    where: EmprendimientoScalarWhereInput
    data: XOR<EmprendimientoUpdateManyMutationInput, EmprendimientoUncheckedUpdateManyWithoutRela_emp_typoempInput>
  }

  export type Typo_emprendimientoCreateWithoutProductoInput = {
    typo: string
    descripcion: string
    foto?: string | null
    emprendimiento?: EmprendimientoCreateNestedManyWithoutRela_emp_typoempInput
  }

  export type Typo_emprendimientoUncheckedCreateWithoutProductoInput = {
    typo: string
    descripcion: string
    foto?: string | null
    emprendimiento?: EmprendimientoUncheckedCreateNestedManyWithoutRela_emp_typoempInput
  }

  export type Typo_emprendimientoCreateOrConnectWithoutProductoInput = {
    where: Typo_emprendimientoWhereUniqueInput
    create: XOR<Typo_emprendimientoCreateWithoutProductoInput, Typo_emprendimientoUncheckedCreateWithoutProductoInput>
  }

  export type Prod_MatCreateWithoutRela_PyMInput = {
    cantidad: string
    rela_MyP: MaterialesCreateNestedOneWithoutProd_matInput
  }

  export type Prod_MatUncheckedCreateWithoutRela_PyMInput = {
    Id?: number
    cantidad: string
    materiales: string
  }

  export type Prod_MatCreateOrConnectWithoutRela_PyMInput = {
    where: Prod_MatWhereUniqueInput
    create: XOR<Prod_MatCreateWithoutRela_PyMInput, Prod_MatUncheckedCreateWithoutRela_PyMInput>
  }

  export type Prod_MatCreateManyRela_PyMInputEnvelope = {
    data: Prod_MatCreateManyRela_PyMInput | Prod_MatCreateManyRela_PyMInput[]
    skipDuplicates?: boolean
  }

  export type Productos_CySCreateWithoutRela_ProdInput = {
    costo?: string | null
    stock?: number | null
    rela_Emp: EmprendimientoCreateNestedOneWithoutProducto_CySInput
  }

  export type Productos_CySUncheckedCreateWithoutRela_ProdInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    emprendimiento: number
  }

  export type Productos_CySCreateOrConnectWithoutRela_ProdInput = {
    where: Productos_CySWhereUniqueInput
    create: XOR<Productos_CySCreateWithoutRela_ProdInput, Productos_CySUncheckedCreateWithoutRela_ProdInput>
  }

  export type Productos_CySCreateManyRela_ProdInputEnvelope = {
    data: Productos_CySCreateManyRela_ProdInput | Productos_CySCreateManyRela_ProdInput[]
    skipDuplicates?: boolean
  }

  export type Typo_emprendimientoUpsertWithoutProductoInput = {
    update: XOR<Typo_emprendimientoUpdateWithoutProductoInput, Typo_emprendimientoUncheckedUpdateWithoutProductoInput>
    create: XOR<Typo_emprendimientoCreateWithoutProductoInput, Typo_emprendimientoUncheckedCreateWithoutProductoInput>
    where?: Typo_emprendimientoWhereInput
  }

  export type Typo_emprendimientoUpdateToOneWithWhereWithoutProductoInput = {
    where?: Typo_emprendimientoWhereInput
    data: XOR<Typo_emprendimientoUpdateWithoutProductoInput, Typo_emprendimientoUncheckedUpdateWithoutProductoInput>
  }

  export type Typo_emprendimientoUpdateWithoutProductoInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    emprendimiento?: EmprendimientoUpdateManyWithoutRela_emp_typoempNestedInput
  }

  export type Typo_emprendimientoUncheckedUpdateWithoutProductoInput = {
    typo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    emprendimiento?: EmprendimientoUncheckedUpdateManyWithoutRela_emp_typoempNestedInput
  }

  export type Prod_MatUpsertWithWhereUniqueWithoutRela_PyMInput = {
    where: Prod_MatWhereUniqueInput
    update: XOR<Prod_MatUpdateWithoutRela_PyMInput, Prod_MatUncheckedUpdateWithoutRela_PyMInput>
    create: XOR<Prod_MatCreateWithoutRela_PyMInput, Prod_MatUncheckedCreateWithoutRela_PyMInput>
  }

  export type Prod_MatUpdateWithWhereUniqueWithoutRela_PyMInput = {
    where: Prod_MatWhereUniqueInput
    data: XOR<Prod_MatUpdateWithoutRela_PyMInput, Prod_MatUncheckedUpdateWithoutRela_PyMInput>
  }

  export type Prod_MatUpdateManyWithWhereWithoutRela_PyMInput = {
    where: Prod_MatScalarWhereInput
    data: XOR<Prod_MatUpdateManyMutationInput, Prod_MatUncheckedUpdateManyWithoutRela_PyMInput>
  }

  export type Prod_MatScalarWhereInput = {
    AND?: Prod_MatScalarWhereInput | Prod_MatScalarWhereInput[]
    OR?: Prod_MatScalarWhereInput[]
    NOT?: Prod_MatScalarWhereInput | Prod_MatScalarWhereInput[]
    Id?: IntFilter<"Prod_Mat"> | number
    cantidad?: StringFilter<"Prod_Mat"> | string
    producto?: StringFilter<"Prod_Mat"> | string
    materiales?: StringFilter<"Prod_Mat"> | string
  }

  export type Productos_CySUpsertWithWhereUniqueWithoutRela_ProdInput = {
    where: Productos_CySWhereUniqueInput
    update: XOR<Productos_CySUpdateWithoutRela_ProdInput, Productos_CySUncheckedUpdateWithoutRela_ProdInput>
    create: XOR<Productos_CySCreateWithoutRela_ProdInput, Productos_CySUncheckedCreateWithoutRela_ProdInput>
  }

  export type Productos_CySUpdateWithWhereUniqueWithoutRela_ProdInput = {
    where: Productos_CySWhereUniqueInput
    data: XOR<Productos_CySUpdateWithoutRela_ProdInput, Productos_CySUncheckedUpdateWithoutRela_ProdInput>
  }

  export type Productos_CySUpdateManyWithWhereWithoutRela_ProdInput = {
    where: Productos_CySScalarWhereInput
    data: XOR<Productos_CySUpdateManyMutationInput, Productos_CySUncheckedUpdateManyWithoutRela_ProdInput>
  }

  export type ProductosCreateWithoutProducto_CySInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    rela_prod_typo: Typo_emprendimientoCreateNestedOneWithoutProductoInput
    prod_mat?: Prod_MatCreateNestedManyWithoutRela_PyMInput
  }

  export type ProductosUncheckedCreateWithoutProducto_CySInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    tipo: string
    prod_mat?: Prod_MatUncheckedCreateNestedManyWithoutRela_PyMInput
  }

  export type ProductosCreateOrConnectWithoutProducto_CySInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutProducto_CySInput, ProductosUncheckedCreateWithoutProducto_CySInput>
  }

  export type EmprendimientoCreateWithoutProducto_CySInput = {
    nombreEmp: string
    colores?: string | null
    rela_emp_usu: UsuarioCreateNestedOneWithoutEmprendimientoInput
    rela_emp_typoemp: Typo_emprendimientoCreateNestedOneWithoutEmprendimientoInput
    material_CyS?: Materiales_CySCreateNestedManyWithoutRela_EmpInput
  }

  export type EmprendimientoUncheckedCreateWithoutProducto_CySInput = {
    Id?: number
    nombreEmp: string
    colores?: string | null
    usuario: string
    tipo: string
    material_CyS?: Materiales_CySUncheckedCreateNestedManyWithoutRela_EmpInput
  }

  export type EmprendimientoCreateOrConnectWithoutProducto_CySInput = {
    where: EmprendimientoWhereUniqueInput
    create: XOR<EmprendimientoCreateWithoutProducto_CySInput, EmprendimientoUncheckedCreateWithoutProducto_CySInput>
  }

  export type ProductosUpsertWithoutProducto_CySInput = {
    update: XOR<ProductosUpdateWithoutProducto_CySInput, ProductosUncheckedUpdateWithoutProducto_CySInput>
    create: XOR<ProductosCreateWithoutProducto_CySInput, ProductosUncheckedCreateWithoutProducto_CySInput>
    where?: ProductosWhereInput
  }

  export type ProductosUpdateToOneWithWhereWithoutProducto_CySInput = {
    where?: ProductosWhereInput
    data: XOR<ProductosUpdateWithoutProducto_CySInput, ProductosUncheckedUpdateWithoutProducto_CySInput>
  }

  export type ProductosUpdateWithoutProducto_CySInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    rela_prod_typo?: Typo_emprendimientoUpdateOneRequiredWithoutProductoNestedInput
    prod_mat?: Prod_MatUpdateManyWithoutRela_PyMNestedInput
  }

  export type ProductosUncheckedUpdateWithoutProducto_CySInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    prod_mat?: Prod_MatUncheckedUpdateManyWithoutRela_PyMNestedInput
  }

  export type EmprendimientoUpsertWithoutProducto_CySInput = {
    update: XOR<EmprendimientoUpdateWithoutProducto_CySInput, EmprendimientoUncheckedUpdateWithoutProducto_CySInput>
    create: XOR<EmprendimientoCreateWithoutProducto_CySInput, EmprendimientoUncheckedCreateWithoutProducto_CySInput>
    where?: EmprendimientoWhereInput
  }

  export type EmprendimientoUpdateToOneWithWhereWithoutProducto_CySInput = {
    where?: EmprendimientoWhereInput
    data: XOR<EmprendimientoUpdateWithoutProducto_CySInput, EmprendimientoUncheckedUpdateWithoutProducto_CySInput>
  }

  export type EmprendimientoUpdateWithoutProducto_CySInput = {
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    rela_emp_usu?: UsuarioUpdateOneRequiredWithoutEmprendimientoNestedInput
    rela_emp_typoemp?: Typo_emprendimientoUpdateOneRequiredWithoutEmprendimientoNestedInput
    material_CyS?: Materiales_CySUpdateManyWithoutRela_EmpNestedInput
  }

  export type EmprendimientoUncheckedUpdateWithoutProducto_CySInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    material_CyS?: Materiales_CySUncheckedUpdateManyWithoutRela_EmpNestedInput
  }

  export type ProductosCreateWithoutProd_matInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    rela_prod_typo: Typo_emprendimientoCreateNestedOneWithoutProductoInput
    producto_CyS?: Productos_CySCreateNestedManyWithoutRela_ProdInput
  }

  export type ProductosUncheckedCreateWithoutProd_matInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
    tipo: string
    producto_CyS?: Productos_CySUncheckedCreateNestedManyWithoutRela_ProdInput
  }

  export type ProductosCreateOrConnectWithoutProd_matInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutProd_matInput, ProductosUncheckedCreateWithoutProd_matInput>
  }

  export type MaterialesCreateWithoutProd_matInput = {
    nombreMat: string
    unidad: string
    foto?: string | null
    materiales_CyS?: Materiales_CySCreateNestedManyWithoutRela_MatInput
  }

  export type MaterialesUncheckedCreateWithoutProd_matInput = {
    nombreMat: string
    unidad: string
    foto?: string | null
    materiales_CyS?: Materiales_CySUncheckedCreateNestedManyWithoutRela_MatInput
  }

  export type MaterialesCreateOrConnectWithoutProd_matInput = {
    where: MaterialesWhereUniqueInput
    create: XOR<MaterialesCreateWithoutProd_matInput, MaterialesUncheckedCreateWithoutProd_matInput>
  }

  export type ProductosUpsertWithoutProd_matInput = {
    update: XOR<ProductosUpdateWithoutProd_matInput, ProductosUncheckedUpdateWithoutProd_matInput>
    create: XOR<ProductosCreateWithoutProd_matInput, ProductosUncheckedCreateWithoutProd_matInput>
    where?: ProductosWhereInput
  }

  export type ProductosUpdateToOneWithWhereWithoutProd_matInput = {
    where?: ProductosWhereInput
    data: XOR<ProductosUpdateWithoutProd_matInput, ProductosUncheckedUpdateWithoutProd_matInput>
  }

  export type ProductosUpdateWithoutProd_matInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    rela_prod_typo?: Typo_emprendimientoUpdateOneRequiredWithoutProductoNestedInput
    producto_CyS?: Productos_CySUpdateManyWithoutRela_ProdNestedInput
  }

  export type ProductosUncheckedUpdateWithoutProd_matInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    producto_CyS?: Productos_CySUncheckedUpdateManyWithoutRela_ProdNestedInput
  }

  export type MaterialesUpsertWithoutProd_matInput = {
    update: XOR<MaterialesUpdateWithoutProd_matInput, MaterialesUncheckedUpdateWithoutProd_matInput>
    create: XOR<MaterialesCreateWithoutProd_matInput, MaterialesUncheckedCreateWithoutProd_matInput>
    where?: MaterialesWhereInput
  }

  export type MaterialesUpdateToOneWithWhereWithoutProd_matInput = {
    where?: MaterialesWhereInput
    data: XOR<MaterialesUpdateWithoutProd_matInput, MaterialesUncheckedUpdateWithoutProd_matInput>
  }

  export type MaterialesUpdateWithoutProd_matInput = {
    nombreMat?: StringFieldUpdateOperationsInput | string
    unidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    materiales_CyS?: Materiales_CySUpdateManyWithoutRela_MatNestedInput
  }

  export type MaterialesUncheckedUpdateWithoutProd_matInput = {
    nombreMat?: StringFieldUpdateOperationsInput | string
    unidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    materiales_CyS?: Materiales_CySUncheckedUpdateManyWithoutRela_MatNestedInput
  }

  export type Prod_MatCreateWithoutRela_MyPInput = {
    cantidad: string
    rela_PyM: ProductosCreateNestedOneWithoutProd_matInput
  }

  export type Prod_MatUncheckedCreateWithoutRela_MyPInput = {
    Id?: number
    cantidad: string
    producto: string
  }

  export type Prod_MatCreateOrConnectWithoutRela_MyPInput = {
    where: Prod_MatWhereUniqueInput
    create: XOR<Prod_MatCreateWithoutRela_MyPInput, Prod_MatUncheckedCreateWithoutRela_MyPInput>
  }

  export type Prod_MatCreateManyRela_MyPInputEnvelope = {
    data: Prod_MatCreateManyRela_MyPInput | Prod_MatCreateManyRela_MyPInput[]
    skipDuplicates?: boolean
  }

  export type Materiales_CySCreateWithoutRela_MatInput = {
    costo?: string | null
    stock?: number | null
    rela_Emp: EmprendimientoCreateNestedOneWithoutMaterial_CySInput
  }

  export type Materiales_CySUncheckedCreateWithoutRela_MatInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    emprendimiento: number
  }

  export type Materiales_CySCreateOrConnectWithoutRela_MatInput = {
    where: Materiales_CySWhereUniqueInput
    create: XOR<Materiales_CySCreateWithoutRela_MatInput, Materiales_CySUncheckedCreateWithoutRela_MatInput>
  }

  export type Materiales_CySCreateManyRela_MatInputEnvelope = {
    data: Materiales_CySCreateManyRela_MatInput | Materiales_CySCreateManyRela_MatInput[]
    skipDuplicates?: boolean
  }

  export type Prod_MatUpsertWithWhereUniqueWithoutRela_MyPInput = {
    where: Prod_MatWhereUniqueInput
    update: XOR<Prod_MatUpdateWithoutRela_MyPInput, Prod_MatUncheckedUpdateWithoutRela_MyPInput>
    create: XOR<Prod_MatCreateWithoutRela_MyPInput, Prod_MatUncheckedCreateWithoutRela_MyPInput>
  }

  export type Prod_MatUpdateWithWhereUniqueWithoutRela_MyPInput = {
    where: Prod_MatWhereUniqueInput
    data: XOR<Prod_MatUpdateWithoutRela_MyPInput, Prod_MatUncheckedUpdateWithoutRela_MyPInput>
  }

  export type Prod_MatUpdateManyWithWhereWithoutRela_MyPInput = {
    where: Prod_MatScalarWhereInput
    data: XOR<Prod_MatUpdateManyMutationInput, Prod_MatUncheckedUpdateManyWithoutRela_MyPInput>
  }

  export type Materiales_CySUpsertWithWhereUniqueWithoutRela_MatInput = {
    where: Materiales_CySWhereUniqueInput
    update: XOR<Materiales_CySUpdateWithoutRela_MatInput, Materiales_CySUncheckedUpdateWithoutRela_MatInput>
    create: XOR<Materiales_CySCreateWithoutRela_MatInput, Materiales_CySUncheckedCreateWithoutRela_MatInput>
  }

  export type Materiales_CySUpdateWithWhereUniqueWithoutRela_MatInput = {
    where: Materiales_CySWhereUniqueInput
    data: XOR<Materiales_CySUpdateWithoutRela_MatInput, Materiales_CySUncheckedUpdateWithoutRela_MatInput>
  }

  export type Materiales_CySUpdateManyWithWhereWithoutRela_MatInput = {
    where: Materiales_CySScalarWhereInput
    data: XOR<Materiales_CySUpdateManyMutationInput, Materiales_CySUncheckedUpdateManyWithoutRela_MatInput>
  }

  export type MaterialesCreateWithoutMateriales_CySInput = {
    nombreMat: string
    unidad: string
    foto?: string | null
    prod_mat?: Prod_MatCreateNestedManyWithoutRela_MyPInput
  }

  export type MaterialesUncheckedCreateWithoutMateriales_CySInput = {
    nombreMat: string
    unidad: string
    foto?: string | null
    prod_mat?: Prod_MatUncheckedCreateNestedManyWithoutRela_MyPInput
  }

  export type MaterialesCreateOrConnectWithoutMateriales_CySInput = {
    where: MaterialesWhereUniqueInput
    create: XOR<MaterialesCreateWithoutMateriales_CySInput, MaterialesUncheckedCreateWithoutMateriales_CySInput>
  }

  export type EmprendimientoCreateWithoutMaterial_CySInput = {
    nombreEmp: string
    colores?: string | null
    rela_emp_usu: UsuarioCreateNestedOneWithoutEmprendimientoInput
    rela_emp_typoemp: Typo_emprendimientoCreateNestedOneWithoutEmprendimientoInput
    producto_CyS?: Productos_CySCreateNestedManyWithoutRela_EmpInput
  }

  export type EmprendimientoUncheckedCreateWithoutMaterial_CySInput = {
    Id?: number
    nombreEmp: string
    colores?: string | null
    usuario: string
    tipo: string
    producto_CyS?: Productos_CySUncheckedCreateNestedManyWithoutRela_EmpInput
  }

  export type EmprendimientoCreateOrConnectWithoutMaterial_CySInput = {
    where: EmprendimientoWhereUniqueInput
    create: XOR<EmprendimientoCreateWithoutMaterial_CySInput, EmprendimientoUncheckedCreateWithoutMaterial_CySInput>
  }

  export type MaterialesUpsertWithoutMateriales_CySInput = {
    update: XOR<MaterialesUpdateWithoutMateriales_CySInput, MaterialesUncheckedUpdateWithoutMateriales_CySInput>
    create: XOR<MaterialesCreateWithoutMateriales_CySInput, MaterialesUncheckedCreateWithoutMateriales_CySInput>
    where?: MaterialesWhereInput
  }

  export type MaterialesUpdateToOneWithWhereWithoutMateriales_CySInput = {
    where?: MaterialesWhereInput
    data: XOR<MaterialesUpdateWithoutMateriales_CySInput, MaterialesUncheckedUpdateWithoutMateriales_CySInput>
  }

  export type MaterialesUpdateWithoutMateriales_CySInput = {
    nombreMat?: StringFieldUpdateOperationsInput | string
    unidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    prod_mat?: Prod_MatUpdateManyWithoutRela_MyPNestedInput
  }

  export type MaterialesUncheckedUpdateWithoutMateriales_CySInput = {
    nombreMat?: StringFieldUpdateOperationsInput | string
    unidad?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    prod_mat?: Prod_MatUncheckedUpdateManyWithoutRela_MyPNestedInput
  }

  export type EmprendimientoUpsertWithoutMaterial_CySInput = {
    update: XOR<EmprendimientoUpdateWithoutMaterial_CySInput, EmprendimientoUncheckedUpdateWithoutMaterial_CySInput>
    create: XOR<EmprendimientoCreateWithoutMaterial_CySInput, EmprendimientoUncheckedCreateWithoutMaterial_CySInput>
    where?: EmprendimientoWhereInput
  }

  export type EmprendimientoUpdateToOneWithWhereWithoutMaterial_CySInput = {
    where?: EmprendimientoWhereInput
    data: XOR<EmprendimientoUpdateWithoutMaterial_CySInput, EmprendimientoUncheckedUpdateWithoutMaterial_CySInput>
  }

  export type EmprendimientoUpdateWithoutMaterial_CySInput = {
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    rela_emp_usu?: UsuarioUpdateOneRequiredWithoutEmprendimientoNestedInput
    rela_emp_typoemp?: Typo_emprendimientoUpdateOneRequiredWithoutEmprendimientoNestedInput
    producto_CyS?: Productos_CySUpdateManyWithoutRela_EmpNestedInput
  }

  export type EmprendimientoUncheckedUpdateWithoutMaterial_CySInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    producto_CyS?: Productos_CySUncheckedUpdateManyWithoutRela_EmpNestedInput
  }

  export type UsuarioCreateWithoutContactosInput = {
    email: string
    contasena: string
    nombreUsu: string
    foto?: string | null
    emprendimiento?: EmprendimientoCreateNestedManyWithoutRela_emp_usuInput
  }

  export type UsuarioUncheckedCreateWithoutContactosInput = {
    email: string
    contasena: string
    nombreUsu: string
    foto?: string | null
    emprendimiento?: EmprendimientoUncheckedCreateNestedManyWithoutRela_emp_usuInput
  }

  export type UsuarioCreateOrConnectWithoutContactosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutContactosInput, UsuarioUncheckedCreateWithoutContactosInput>
  }

  export type UsuarioUpsertWithoutContactosInput = {
    update: XOR<UsuarioUpdateWithoutContactosInput, UsuarioUncheckedUpdateWithoutContactosInput>
    create: XOR<UsuarioCreateWithoutContactosInput, UsuarioUncheckedCreateWithoutContactosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutContactosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutContactosInput, UsuarioUncheckedUpdateWithoutContactosInput>
  }

  export type UsuarioUpdateWithoutContactosInput = {
    email?: StringFieldUpdateOperationsInput | string
    contasena?: StringFieldUpdateOperationsInput | string
    nombreUsu?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    emprendimiento?: EmprendimientoUpdateManyWithoutRela_emp_usuNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutContactosInput = {
    email?: StringFieldUpdateOperationsInput | string
    contasena?: StringFieldUpdateOperationsInput | string
    nombreUsu?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    emprendimiento?: EmprendimientoUncheckedUpdateManyWithoutRela_emp_usuNestedInput
  }

  export type EmprendimientoCreateManyRela_emp_usuInput = {
    Id?: number
    nombreEmp: string
    colores?: string | null
    tipo: string
  }

  export type ContactosCreateManyPropietarioInput = {
    Id?: number
    nombre: string
    email?: string | null
    telefono?: number | null
    redes_soc?: string | null
    notas_perz?: string | null
    foto?: string | null
  }

  export type EmprendimientoUpdateWithoutRela_emp_usuInput = {
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    rela_emp_typoemp?: Typo_emprendimientoUpdateOneRequiredWithoutEmprendimientoNestedInput
    material_CyS?: Materiales_CySUpdateManyWithoutRela_EmpNestedInput
    producto_CyS?: Productos_CySUpdateManyWithoutRela_EmpNestedInput
  }

  export type EmprendimientoUncheckedUpdateWithoutRela_emp_usuInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    material_CyS?: Materiales_CySUncheckedUpdateManyWithoutRela_EmpNestedInput
    producto_CyS?: Productos_CySUncheckedUpdateManyWithoutRela_EmpNestedInput
  }

  export type EmprendimientoUncheckedUpdateManyWithoutRela_emp_usuInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type ContactosUpdateWithoutPropietarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    redes_soc?: NullableStringFieldUpdateOperationsInput | string | null
    notas_perz?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactosUncheckedUpdateWithoutPropietarioInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    redes_soc?: NullableStringFieldUpdateOperationsInput | string | null
    notas_perz?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactosUncheckedUpdateManyWithoutPropietarioInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableIntFieldUpdateOperationsInput | number | null
    redes_soc?: NullableStringFieldUpdateOperationsInput | string | null
    notas_perz?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Materiales_CySCreateManyRela_EmpInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    materiales: string
  }

  export type Productos_CySCreateManyRela_EmpInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    producto: string
  }

  export type Materiales_CySUpdateWithoutRela_EmpInput = {
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    rela_Mat?: MaterialesUpdateOneRequiredWithoutMateriales_CySNestedInput
  }

  export type Materiales_CySUncheckedUpdateWithoutRela_EmpInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    materiales?: StringFieldUpdateOperationsInput | string
  }

  export type Materiales_CySUncheckedUpdateManyWithoutRela_EmpInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    materiales?: StringFieldUpdateOperationsInput | string
  }

  export type Productos_CySUpdateWithoutRela_EmpInput = {
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    rela_Prod?: ProductosUpdateOneRequiredWithoutProducto_CySNestedInput
  }

  export type Productos_CySUncheckedUpdateWithoutRela_EmpInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    producto?: StringFieldUpdateOperationsInput | string
  }

  export type Productos_CySUncheckedUpdateManyWithoutRela_EmpInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    producto?: StringFieldUpdateOperationsInput | string
  }

  export type ProductosCreateManyRela_prod_typoInput = {
    nombre: string
    descripcion: string
    pasos: string
    herramientas: string
    foto?: string | null
  }

  export type EmprendimientoCreateManyRela_emp_typoempInput = {
    Id?: number
    nombreEmp: string
    colores?: string | null
    usuario: string
  }

  export type ProductosUpdateWithoutRela_prod_typoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    prod_mat?: Prod_MatUpdateManyWithoutRela_PyMNestedInput
    producto_CyS?: Productos_CySUpdateManyWithoutRela_ProdNestedInput
  }

  export type ProductosUncheckedUpdateWithoutRela_prod_typoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    prod_mat?: Prod_MatUncheckedUpdateManyWithoutRela_PyMNestedInput
    producto_CyS?: Productos_CySUncheckedUpdateManyWithoutRela_ProdNestedInput
  }

  export type ProductosUncheckedUpdateManyWithoutRela_prod_typoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: StringFieldUpdateOperationsInput | string
    herramientas?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmprendimientoUpdateWithoutRela_emp_typoempInput = {
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    rela_emp_usu?: UsuarioUpdateOneRequiredWithoutEmprendimientoNestedInput
    material_CyS?: Materiales_CySUpdateManyWithoutRela_EmpNestedInput
    producto_CyS?: Productos_CySUpdateManyWithoutRela_EmpNestedInput
  }

  export type EmprendimientoUncheckedUpdateWithoutRela_emp_typoempInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    material_CyS?: Materiales_CySUncheckedUpdateManyWithoutRela_EmpNestedInput
    producto_CyS?: Productos_CySUncheckedUpdateManyWithoutRela_EmpNestedInput
  }

  export type EmprendimientoUncheckedUpdateManyWithoutRela_emp_typoempInput = {
    Id?: IntFieldUpdateOperationsInput | number
    nombreEmp?: StringFieldUpdateOperationsInput | string
    colores?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: StringFieldUpdateOperationsInput | string
  }

  export type Prod_MatCreateManyRela_PyMInput = {
    Id?: number
    cantidad: string
    materiales: string
  }

  export type Productos_CySCreateManyRela_ProdInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    emprendimiento: number
  }

  export type Prod_MatUpdateWithoutRela_PyMInput = {
    cantidad?: StringFieldUpdateOperationsInput | string
    rela_MyP?: MaterialesUpdateOneRequiredWithoutProd_matNestedInput
  }

  export type Prod_MatUncheckedUpdateWithoutRela_PyMInput = {
    Id?: IntFieldUpdateOperationsInput | number
    cantidad?: StringFieldUpdateOperationsInput | string
    materiales?: StringFieldUpdateOperationsInput | string
  }

  export type Prod_MatUncheckedUpdateManyWithoutRela_PyMInput = {
    Id?: IntFieldUpdateOperationsInput | number
    cantidad?: StringFieldUpdateOperationsInput | string
    materiales?: StringFieldUpdateOperationsInput | string
  }

  export type Productos_CySUpdateWithoutRela_ProdInput = {
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    rela_Emp?: EmprendimientoUpdateOneRequiredWithoutProducto_CySNestedInput
  }

  export type Productos_CySUncheckedUpdateWithoutRela_ProdInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    emprendimiento?: IntFieldUpdateOperationsInput | number
  }

  export type Productos_CySUncheckedUpdateManyWithoutRela_ProdInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    emprendimiento?: IntFieldUpdateOperationsInput | number
  }

  export type Prod_MatCreateManyRela_MyPInput = {
    Id?: number
    cantidad: string
    producto: string
  }

  export type Materiales_CySCreateManyRela_MatInput = {
    Id?: number
    costo?: string | null
    stock?: number | null
    emprendimiento: number
  }

  export type Prod_MatUpdateWithoutRela_MyPInput = {
    cantidad?: StringFieldUpdateOperationsInput | string
    rela_PyM?: ProductosUpdateOneRequiredWithoutProd_matNestedInput
  }

  export type Prod_MatUncheckedUpdateWithoutRela_MyPInput = {
    Id?: IntFieldUpdateOperationsInput | number
    cantidad?: StringFieldUpdateOperationsInput | string
    producto?: StringFieldUpdateOperationsInput | string
  }

  export type Prod_MatUncheckedUpdateManyWithoutRela_MyPInput = {
    Id?: IntFieldUpdateOperationsInput | number
    cantidad?: StringFieldUpdateOperationsInput | string
    producto?: StringFieldUpdateOperationsInput | string
  }

  export type Materiales_CySUpdateWithoutRela_MatInput = {
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    rela_Emp?: EmprendimientoUpdateOneRequiredWithoutMaterial_CySNestedInput
  }

  export type Materiales_CySUncheckedUpdateWithoutRela_MatInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    emprendimiento?: IntFieldUpdateOperationsInput | number
  }

  export type Materiales_CySUncheckedUpdateManyWithoutRela_MatInput = {
    Id?: IntFieldUpdateOperationsInput | number
    costo?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    emprendimiento?: IntFieldUpdateOperationsInput | number
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