/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `timestamp-converter` command */
  export type TimestampConverter = ExtensionPreferences & {
  /** Use Selected Text - Always try to use the selected text as the input for the command first */
  "use-selected-text"?: boolean
}
  /** Preferences accessible in the `url-encode-decode` command */
  export type UrlEncodeDecode = ExtensionPreferences & {}
  /** Preferences accessible in the `json-escape-unescape` command */
  export type JsonEscapeUnescape = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `timestamp-converter` command */
  export type TimestampConverter = {
  /** Enter a timestamp */
  "timestamp": string
}
  /** Arguments passed to the `url-encode-decode` command */
  export type UrlEncodeDecode = {}
  /** Arguments passed to the `json-escape-unescape` command */
  export type JsonEscapeUnescape = {}
}

