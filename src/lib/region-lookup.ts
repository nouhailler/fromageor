import { REGIONS } from '../data/regions'

const byId = new Map(REGIONS.map((r) => [r.id, r.name]))

export function regionName(regionId: string): string {
  return byId.get(regionId) ?? ''
}
