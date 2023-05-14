import { expect, test } from 'vitest'
import cleanUnknown from './cleanUnknown'

test('branchGroup', () => {
  expect(
    cleanUnknown([
      {
        _t: 'Branch',
        groupLength: 6,
      },
      {
        _t: 'BackgroundGroup',
        backgrounds: {
          'cemetery-00-noon': 'env_adv_2d_cemetery-00-noon',
          'livestage-00-noon': 'env_adv_2d_livestage-00-noon',
          'stagesleeves-00-noon': 'env_adv_2d_stagesleeves-00-noon',
        },
      },
      {
        _t: 'Unknown',
        raw: '{"command":"actorgroup","args":[{"key":"actors","value":{"command":"actor","args":[{"key":"id","value":"rio"},{"key":"body","value":"mdl_chr_rio-kiok-00_body"},{"key":"face","value":"mdl_chr_rio-base-00_face"},{"key":"hair","value":"mdl_chr_rio-kiok-00_hair"}]}},{"key":"actors","value":{"command":"actor","args":[{"key":"id","value":"aoi"},{"key":"body","value":"mdl_chr_aoi-idol-00_body"},{"key":"face","value":"mdl_chr_aoi-base-00_face"},{"key":"hair","value":"mdl_chr_aoi-idol-00_hair"}]}},{"key":"actors","value":{"command":"actor","args":[{"key":"id","value":"ai"},{"key":"body","value":"mdl_chr_ai-idol-00_body"},{"key":"face","value":"mdl_chr_ai-base-00_face"},{"key":"hair","value":"mdl_chr_ai-idol-00_hair"}]}},{"key":"actors","value":{"command":"actor","args":[{"key":"id","value":"kkr"},{"key":"body","value":"mdl_chr_kkr-idol-00_body"},{"key":"face","value":"mdl_chr_kkr-base-00_face"},{"key":"hair","value":"mdl_chr_kkr-idol-00_hair"}]}},{"key":"actors","value":{"command":"actor","args":[{"key":"id","value":"ktn"},{"key":"body","value":"mdl_chr_ktn-kiok-00_body"},{"key":"face","value":"mdl_chr_ktn-base-00_face"},{"key":"hair","value":"mdl_chr_ktn-kiok-00_hair"}]}}]}',
      },
      {
        _t: 'Title',
        title: '運命繋ぐ流星の軌跡 5話 星の海の記憶',
      },
      {
        _t: 'Bgm',
        bgm: 'sud_bgm_adv_liz-01',
        duration: 74.4333333333,
        startTime: 0,
      },
      {
        _t: 'Bgm',
        bgm: 'sud_bgm_adv_moon-01',
        duration: 69.5612698396,
        startTime: 77.7,
      },
      {
        _t: 'Unknown',
        raw: '{"command":"fade","args":[{"key":"from","value":1},{"key":"to","value":0},{"key":"clip","value":{"_startTime":0,"_duration":0.8,"_easeInDuration":0,"_easeOutDuration":0,"_blendInDuration":-1,"_blendOutDuration":-1,"_mixInEaseType":1,"_mixOutEaseType":1,"_timeScale":1}}]}',
      },
    ])
  ).toStrictEqual([
    {
      _t: 'Branch',
      groupLength: 4,
    },
    {
      _t: 'BackgroundGroup',
      backgrounds: {
        'cemetery-00-noon': 'env_adv_2d_cemetery-00-noon',
        'livestage-00-noon': 'env_adv_2d_livestage-00-noon',
        'stagesleeves-00-noon': 'env_adv_2d_stagesleeves-00-noon',
      },
    },
    {
      _t: 'Title',
      title: '運命繋ぐ流星の軌跡 5話 星の海の記憶',
    },
    {
      _t: 'Bgm',
      bgm: 'sud_bgm_adv_liz-01',
      duration: 74.4333333333,
      startTime: 0,
    },
    {
      _t: 'Bgm',
      bgm: 'sud_bgm_adv_moon-01',
      duration: 69.5612698396,
      startTime: 77.7,
    },
  ])
})
