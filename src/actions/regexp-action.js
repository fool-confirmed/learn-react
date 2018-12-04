export const REG_EXP_MATCH = 'REG_EXP_MATCH';

export function tryMatches(src, reg) {
  return {type: REG_EXP_MATCH, source: src, regexp: reg};
}