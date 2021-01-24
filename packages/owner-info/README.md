# `@dgks/owner-info`

[Owner Info](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15021136) SDK for data.go.kr

## Install

```bash
pnpm i @dgks/owner-info
```

## Usage

```typescript
import { OwnerInfoService } from '@dgks/owner-info'

new OwnerInfoService({
  key: 'base64 encoded service key from data.go.kr',
})
  .getArchitecturePossession({ sigungu_cd: '11200', bjdong_cd: '11400', bun: '0656', ji: '0320' })
  .then((resp) => resp.items)
  .then(console.log)
```

## RequestOptions

Working In Progress
