package co.za.mmi.conversions.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import co.za.mmi.conversions.impl.ConversionsImpl;
import co.za.mmi.conversions.mmi.ConvertionsDTO;

@RestController
public class ConvertionsController {

	ConversionsImpl conversionsImpl = new ConversionsImpl();

	@PostMapping("api/convert")
	@CrossOrigin("http://localhost:4200")
	@ResponseBody
	public double convert(@RequestBody ConvertionsDTO convertionsDto) {
		double convertedValue;
		convertedValue = conversionsImpl.convertUnits(convertionsDto.getUnitFrom(), convertionsDto.getUnitTo(),
				convertionsDto.getNumber());

		return convertedValue;
	}
}
