package com.wowdiz.finalproj.service;

import java.util.List;
import java.util.Map;

import com.wowdiz.finalproj.dto.FAQDto;


public interface FAQService {
//	public List <FAQDto> faqlist();
	public void faqcreate (FAQDto dto);
	public FAQDto faqdetail(Integer faq_id);
	public void faqdelete(Integer faq_id);
	public void faqupdate(FAQDto dto);
	public Integer faqtotalpage();
	public List <FAQDto> faqGetData();
	public List<FAQDto> selectAddFaqList(Integer startNum);
}
