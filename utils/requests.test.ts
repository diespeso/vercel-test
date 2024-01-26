import { expect, test} from 'vitest'
import { sendApiSuccess, sendApiFailure } from './requests'

test('builds success response', () => {
  expect(sendApiSuccess(32)).toStrictEqual({
    success: true,
    data: 32,
    message: 'Processed succesfully'
  })
})

test('builds failure response', () => {
  expect(sendApiFailure({ value: 32})).toStrictEqual({
    success: false,
    data: { value: 32},
    message: 'Processing failed'
  })
})