import React from "react"
import { Box } from "../../src"

export default function Phone(props) {
  return (
    <Box className="bg-gray-700 w-20 mx-auto p-2 rounded-lg overflow-hidden">
      <Box className="flex mb-2 items-center justify-center">
        <Box className="w-3 h-1 rounded-full bg-gray-900" />
      </Box>
      <Box className="relative bg-gray-100 text-tiny leading-tight p-1 rounded-sm h-24 overflow-hidden overflow-y-auto">
        {props.children}
      </Box>
      <Box className="flex mt-2 items-center justify-center">
        <Box className="w-3 h-3 rounded-full bg-gray-900" />
      </Box>
    </Box>
  )
}
