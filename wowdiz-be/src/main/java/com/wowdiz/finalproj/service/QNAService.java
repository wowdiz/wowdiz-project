package com.wowdiz.finalproj.service;

import java.util.List;

import com.wowdiz.finalproj.dto.QNADto;

public interface QNAService {
	public List <QNADto> qnalist();
	public void qnacreate (QNADto dto);
	public QNADto qnadetail(Integer inquiry_id);
}