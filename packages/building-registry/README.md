# `@dgks/building-registry`

[Building Registry](https://www.data.go.kr/data/15044713/openapi.do) SDK for data.go.kr

## Install

```bash
pnpm i @dgks/building-registry
```

## Usage

```typescript
import { BuildingRegistryService } from '@dgks/building-registry'

new BuildingRegistryService({ serviceKey: 'base64 encoded service key from data.go.kr' })
  .getTitle({ bjdongCd: 11400, sigunguCd: 11200 })
  .then((resp) => resp.items)
  .then(console.log)
```

## RequestOptions

Working In Progress
