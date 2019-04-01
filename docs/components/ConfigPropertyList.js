import React from "react"
import { Box, ConfigConsumer } from "../../src"

export default function ConfigPropertyList({ property, pattern }) {
  return (
    <ConfigConsumer>
      {({ config }) => (
        <Box className="my-4">
          {pattern && (
            <Box className="mb-2 text-gray-700">
              <Box
                is="span"
                className="font-mono text-base bg-gray-100 inline-block py-px px-2 rounded"
              >
                {pattern}
              </Box>
            </Box>
          )}
          <Box className="flex flex-wrap">
            {Object.keys(config.theme[property]).map((key) => (
              <Box className="flex flex-column rounded-sm font-mono text-sm overflow-hidden mr-2 mb-2">
                <Box className="bg-gray-500 text-xs flex justify-center items-center px-2 text-white">
                  {key}
                </Box>
                <Box className="bg-gray-200 flex justify-center text-xs items-center px-3">
                  {config.theme[property][key]}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </ConfigConsumer>
  )
}
