"use client";
import { useState } from "react";

export default function FifthBlock() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">FAQs</h2>
          <h3 className="text-xl font-semibold mb-4">
            Frequency Asked Questions
          </h3>
          <div className="bg-indigo-900 p-6 shadow-lg">
            <p className="text-xl text-white font-medium mb-4">
              Have Any Questions On Your Minds!
            </p>
            <a
              href="/contact"
              className="bg-orange-500 text-white font-semibold py-2 px-2"
            >
              Contact Us →
            </a>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <button
              className="w-full text-left text-xl font-semibold text-gray-900 py-2"
              onClick={() => toggleQuestion(0)}
            >
              캐나다 시장 진출을 위한 첫 단계는 무엇인가요?
              <span className="float-right">
                {activeIndex === 0 ? "🔽" : "▶"}
              </span>
            </button>
            {activeIndex === 0 && (
              <p className="bg-white py-10 px-10 text-gray-700 mt-2">
                캐나다 시장 진출을 위한 첫 단계는 철저한 시장 조사와 전략 수립에
                초점을 맞추는 것입니다. 이 과정에서는 캐나다 시장의 특성, 타겟
                소비자의 행동과 선호도, 경쟁 상황을 면밀히 분석하고, 시장 규모
                및 성장 잠재력을 평가해야 합니다. 이를 통해 타겟 시장과 고객
                기반을 명확하게 정의할 수 있습니다.
                <br />
                <br />
                동시에, 캐나다의 법규, 규제, 비즈니스 관행을 이해하는 것이
                필수적입니다. 이는 사업체 등록, 세금 처리, 노동법 준수, 특정
                산업에 대한 규제 준수 등을 포함합니다. 이러한 법적 요소들을
                명확히 이해하고 준수함으로써, 비즈니스 운영에 있어 법적 리스크를
                최소화할 수 있습니다. <br />
                <br />
                또한, 캐나다 시장에 적합한 비즈니스 모델을 개발하고, 현지 시장
                조건에 맞춘 마케팅, 판매, 유통 전략을 수립하는 것도 중요합니다.
                이 과정에서 경쟁 분석을 통해 자사의 강점과 약점을 파악하고,
                차별화된 전략을 개발하는 것이 필수적입니다. <br />
                <br />
                현지 비즈니스 네트워크와의 관계 구축과 파트너십 개발도 중요한
                요소입니다. 현지의 비즈니스 파트너들과의 협력은 시장 진입 장벽을
                낮추고, 비즈니스 확장에 필요한 현지 지식과 자원에 접근하는 데
                도움을 줄 수 있습니다. <br />
                <br />
                마지막으로, 제품이나 서비스를 현지 시장의 문화와 언어에 맞게
                조정하고, 현지화된 마케팅 자료를 준비하는 것도 중요합니다. 이는
                캐나다의 다문화적 특성과 지역적 다양성을 반영하여, 현지
                소비자들과의 연결을 강화하는 데 기여합니다. <br />
                <br />
                캐나다 시장 진출을 위한 이러한 첫 단계는 장기적인 성공을 위한
                견고한 기반을 마련하는 데 중요합니다.
              </p>
            )}
          </div>
          <div className="mb-4">
            <button
              className="w-full text-left text-xl font-semibold text-gray-900 py-2"
              onClick={() => toggleQuestion(1)}
            >
              캐나다에서 비즈니스를 시작하기 위한 법적 요건은 무엇인가요?
              <span className="float-right">
                {activeIndex === 1 ? "🔽" : "▶"}
              </span>
            </button>
            {activeIndex === 1 && (
              <p className="bg-white py-10 px-10 text-gray-700 mt-2">
                <b>사업체 등록</b>: 비즈니스를 시작하기 전에 사업체를 적절한 주
                또는 연방 수준에서 등록해야 합니다. 이 과정에는 사업체 이름
                결정, 사업 유형 결정(예: 개인 사업체, 파트너십, 법인) 등이
                포함됩니다. <br />
                <br />
                <b>세금 등록</b>: GST/HST, PST, QST(소비세) 및 기타 관련 세금을
                위한 등록이 필요할 수 있습니다. 또한, 사업체로 수입을 얻는 경우
                소득세 신고를 위한 준비가 필요합니다. <br />
                <br />
                <b>사업 면허 및 허가</b>: 특정 유형의 비즈니스의 경우, 사업을
                운영하기 위한 특정 면허나 허가가 필요할 수 있습니다. 이는 지역에
                따라 다를 수 있으며, 업종에 따라 요구되는 허가나 규제가 다를 수
                있습니다. <br />
                <br />
                <b>노동법 준수</b>: 직원을 고용하는 경우, 캐나다의 노동법과 고용
                표준을 준수해야 합니다. 이에는 최저 임금, 근무 시간, 휴가, 건강
                및 안전 기준 등이 포함됩니다. <br />
                <br />
                <b>계약 및 법적 문서</b>: 계약, 서비스 약관, 개인정보 보호 정책
                등과 같은 법적 문서는 전문적으로 준비하고 검토하는 것이
                중요합니다.
                <br />
                <br />
                <b>지적재산권 보호</b>: 상표, 저작권, 특허 등과 관련하여 귀하의
                비즈니스의 지적재산을 보호하는 것이 중요합니다. <br />
                <br />
                <b>보험 가입</b>: 적절한 비즈니스 보험이나 책임보험에 가입하여
                잠재적 위험으로부터 비즈니스를 보호하는 것을 고려해야 합니다.{" "}
                <br />
                <br />
                이러한 법적 요건들을 준수하는 것은 캐나다에서 비즈니스를
                성공적으로 운영하기 위한 기본적인 단계입니다. 우리는 캐나다에서
                비즈니스를 시작하고자 하는 고객에게 필요한 법적 요건에 대한
                상세한 안내와 지원을 제공합니다.
              </p>
            )}
          </div>
          <div className="mb-4">
            <button
              className="w-full text-left text-xl font-semibold text-gray-900 py-2"
              onClick={() => toggleQuestion(2)}
            >
              캐나다 시장 진출 시 마주칠 수 있는 가장 큰 도전은 무엇인가요?
              <span className="float-right">
                {activeIndex === 2 ? "🔽" : "▶"}
              </span>
            </button>
            {activeIndex === 2 && (
              <p className="bg-white py-10 px-10 text-gray-700 mt-2">
                캐나다 시장 진출 시 마주칠 수 있는 주요 도전 중 하나는 문화적
                차이와 시장 이해도의 부족입니다. 캐나다는 다문화적 사회로서,
                다양한 문화적 배경을 가진 소비자들의 요구와 기대를 이해하는 것이
                중요합니다. 특히, 광고와 마케팅 전략을 현지 문화에 맞게 조정하는
                것이 필요합니다. <br />
                <br />
                또한, 국내 시장과 다른 법적 및 규제 환경에 적응하는 것도 중요한
                도전입니다. 캐나다의 법률, 세금 체계, 무역 규정 등을 정확히
                이해하고 준수하는 것이 필수적입니다. 이는 특히 수입, 수출,
                상표권, 특허 등과 관련하여 중요합니다. <br />
                <br />
                경쟁도 중요한 요소입니다. 캐나다 시장은 이미 다양한 글로벌
                브랜드와 현지 기업들로 경쟁이 치열합니다. 따라서 시장 조사를
                통해 타겟 고객을 명확히 정의하고, 경쟁사에 대한 철저한 분석을
                통해 차별화된 전략을 수립하는 것이 중요합니다. <br />
                <br />
                마지막으로, 캐나다의 광활한 지리적 범위와 지역별 특성도 고려해야
                합니다. 캐나다는 면적이 매우 넓고, 각 지역마다 경제적, 문화적
                특성이 다양합니다. 따라서 지역별 시장 특성을 이해하고, 지역별
                맞춤 전략을 개발하는 것도 중요한 도전입니다.
                <br />
                <br />
                이러한 도전들을 극복하기 위해서는 철저한 준비와 현지 시장에 대한
                깊은 이해가 필요합니다. 우리는 캐나다 시장 진출을 고려하는
                기업들에게 전략적 조언과 실질적인 지원을 제공하여, 이러한
                도전들을 성공적으로 극복할 수 있도록 도와드립니다.
              </p>
            )}
          </div>
          <div className="mb-4">
            <button
              className="w-full text-left text-xl font-semibold text-gray-900 py-2"
              onClick={() => toggleQuestion(3)}
            >
              캐나다 시장에서 경쟁력을 갖추기 위한 주요 전략은 무엇인가요?
              <span className="float-right">
                {activeIndex === 3 ? "🔽" : "▶"}
              </span>
            </button>
            {activeIndex === 3 && (
              <p className="bg-white py-10 px-10 text-gray-700 mt-2">
                캐나다 시장에 특화된 경쟁력 강화 전략을 세울 때 고려해야 할 주요
                요소는 다음과 같습니다.
                <br />
                <br /> <b>다문화 시장 이해</b>: 캐나다는 다문화적인 사회입니다.
                다양한 문화적 배경을 가진 소비자들의 요구와 선호도를 파악하고,
                마케팅 및 제품 전략을 이에 맞추는 것이 중요합니다. <br />
                <br />
                <b>현지 법규 및 규제 준수</b>: 캐나다의 특정 산업과 관련된 법규
                및 규제를 정확히 이해하고 준수해야 합니다. 이는 상품의 안전,
                광고, 라벨링 기준 등을 포함할 수 있습니다. <br />
                <br />
                <b>지속 가능성과 환경 의식</b>: 캐나다 시장에서는 지속 가능하고
                환경 친화적인 비즈니스 관행이 점점 더 중요해지고 있습니다.
                이러한 가치를 제품이나 서비스에 반영하는 것이 중요합니다. <br />
                <br />
                <b>디지털 마케팅과 온라인 존재감</b>: 강력한 온라인 존재감을
                구축하고, 디지털 마케팅 전략을 활용하는 것이 필수적입니다. 소셜
                미디어, 검색 엔진 최적화(SEO), 온라인 광고 등을 통해 타겟
                고객에게 도달할 수 있습니다. <br />
                <br />
                <b>현지 네트워크와 관계 구축</b>: 현지 사업 파트너와의 관계를
                구축하고, 현지 시장에 대한 깊은 이해를 바탕으로 전략을 수립하는
                것이 중요합니다. 이는 공급망 관리, 유통 채널 확립, 현지화 전략에
                있어 큰 이점을 제공할 수 있습니다. <br />
                <br />
                <b>고객 중심의 접근 방식</b>: 캐나다 시장에서 성공하기 위해서는
                고객 중심의 접근 방식을 채택하는 것이 중요합니다. 고객의
                피드백을 듣고, 이를 제품 개발 및 서비스 개선에 반영하는 것이
                중요합니다. <br />
                <br />
                캐나다 시장에 초점을 맞춘 이러한 전략들은 고객의 비즈니스가 현지
                시장에서 성공적으로 자리 잡는 데 도움이 될 것입니다.
                <br />
                <br />
                경쟁력을 갖추기 위해 중점을 두어야 할 주요 전략들은 다음과
                같습니다.
                <br />
                <br /> <b>시장 조사와 현지화</b>: 캐나다 시장의 특성과 소비자의
                선호도를 이해하는 것이 중요합니다. 현지 시장 조사를 통해 타겟
                고객을 정확히 파악하고, 제품이나 서비스를 현지 문화와 소비자의
                기대에 맞게 조정해야 합니다. <br />
                <br />
                <b>차별화된 가치 제안</b>: 캐나다 시장에서 돋보일 수 있는 독특한
                가치를 제공하는 것이 중요합니다. 제품이나 서비스의 독특한 특징을
                강조하고, 경쟁사와 차별화되는 요소를 개발해야 합니다.
                <br />
                <br />
                <b>강력한 브랜드 구축</b>: 브랜드 인지도를 높이고, 강력한 브랜드
                이미지를 구축하는 것이 중요합니다. 효과적인 마케팅 전략과
                캠페인을 통해 브랜드 가치를 전달하고, 고객의 신뢰를 쌓아야
                합니다. <br />
                <br />
                <b>네트워크 및 파트너십 개발</b>: 현지 비즈니스 네트워크와
                파트너십을 구축하는 것도 중요합니다. 현지의 파트너, 유통업체,
                업계 전문가와의 협력을 통해 시장 진입 장벽을 낮출 수 있습니다.{" "}
                <br />
                <br />
                <b>고객 서비스와 사후 지원 강화</b>: 우수한 고객 서비스와 사후
                지원은 고객 만족도를 높이고, 장기적인 고객 충성도를 구축하는 데
                중요합니다. 고객의 필요에 신속하고 효과적으로 대응하는 것이
                중요합니다. <br />
                <br />
                <b>지속적인 혁신과 개선</b>: 시장의 변화에 빠르게 대응하고,
                지속적인 제품 혁신과 서비스 개선을 통해 경쟁 우위를 유지하는
                것이 중요합니다. <br />
                <br />
                이러한 전략들은 캐나다 시장에서의 성공적인 비즈니스 운영을 위해
                필수적입니다. 우리는 고객의 비즈니스가 캐나다 시장에서 성공할 수
                있도록 전략적 조언과 지원을 제공합니다.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}