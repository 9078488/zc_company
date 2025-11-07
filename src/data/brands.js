import sondex_phe from '/product_images/sondex-standard-plate-heat-exchangers.png'
import rotorkProduct from '/product_images/rotorkProduct.jpg'
import sondex_logo from '/brand_logo/sondex_logo.png'
import rotork_logo from '/brand_logo/rotork_logo.png'
import { nanoid } from 'nanoid'

const brands = [
  {
    id: nanoid(),
    name: '桑德斯(Sondex)板式换热器',
    brand: '桑德斯(Sondex)',
    brand_logo: sondex_logo,
    image: sondex_phe,
    description: '源自丹麦的换热器品牌，创立于1984年',
    details: [
      '桑德斯（Sondex） 成立于 1984 年，总部位于丹麦科灵，是一家专注于板式换热器设计与制造的国际知名企业。自创立以来，Sondex 始终秉承“高效节能、可靠耐用”的理念，致力于为全球客户提供先进的热交换解决方案。',
      'Sondex 的产品涵盖可拆式换热器、半焊式换热器、板壳式换热器、钎焊式换热器以及蒸发器冷凝器等多种类型，广泛应用于暖通空调、制冷、食品饮料、化工、造船、能源及环保处理等领域。凭借卓越的传热性能和灵活的模块化设计，Sondex 的换热设备能够满足从小型系统到大型工业流程的多样化需求。',
      '2016 年，Sondex 正式加入丹佛斯集团（Danfoss），成为其热能解决方案业务的重要组成部分。通过与丹佛斯的技术整合及全球网络协同，Sondex 进一步提升了研发能力与市场服务水平，持续推动全球热能系统的高效与可持续发展。',
    ],
  },
  {
    id: nanoid(),
    name: '罗托克(Rotork)执行器',
    brand: '罗托克(Rotork)',
    brand_logo: rotork_logo,
    image: rotorkProduct,
    description:
      'Rotork 在工业阀门执行器,阀门控制系统,阀门齿轮箱及附件的设计和生产上居世界领导地位',
    details: [
      '罗托克（Rotork）是一家全球领先的关键流体控制与仪表解决方案供应商，致力于为全球客户提供创新、高品质且可靠的产品，用于液体、气体及粉体的流量控制。世界各地的客户信赖罗托克的技术与产品，以实现更高的运行效率、降低排放、减少环境影响并保障工业安全。',
      '罗托克的业务涵盖三大核心市场领域：石油与天然气（Oil & Gas）、水务与电力（Water & Power）以及化工、过程与工业（Chemical, Process & Industrial，简称 CPI）。这种以终端市场为导向的业务架构，使罗托克能够与客户建立紧密的战略合作关系，更直接地满足其自动化控制与工程需求。',
      '作为一家具有全球影响力的企业，罗托克拥有约 3,500 名员工，业务遍及 170 个国家。公司始终与客户保持密切合作，深入了解他们的工艺需求与自动化挑战。罗托克在全球范围内持续投入创新研发，确保为各个行业提供领先技术与高性能产品。',
      '凭借超过 60 年的行业经验与全面的产品组合，罗托克已成为全球执行器与流体控制系统的首选品牌。其产品采用优质组件制造，设计注重安全与易用性，并通过严格的测试以确保长久的稳定性能与可靠性。',
      '罗托克始终将可持续发展作为企业战略的重要方向，致力于降低运营与产品生命周期中的环境影响。公司承诺在 2035 年前实现范围 1 和范围 2 的碳中和目标，并在 2045 年前实现范围 3 的净零排放。同时，罗托克积极推进减少废弃物填埋和节约水资源等环保措施，持续提升自身的环境绩效，以推动行业向更绿色、更可持续的未来发展。',
    ],
  },
]

export default brands
