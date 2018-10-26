package co.za.mmi.conversions.impl;

import java.util.HashMap;
import java.util.Set;

public class ConversionsImpl {

	private HashMap<String, Double> _units;

	public double convertUnits(String unitFrom, String unitTo, double number) {
		Set<String> units = availableUnits();
		String tempUnitFrom = null;
		String tempUnitTo = null;
		for (String unFrm : units) {
			if (unitFrom.equalsIgnoreCase(unFrm)) {
				tempUnitFrom = unFrm;
			}
			for (String unTo : units) {
				if (unitTo.equalsIgnoreCase(unTo)) {
					tempUnitTo = unTo;
				}
			}

		}
		return number * _units.get(tempUnitFrom) / _units.get(tempUnitTo);

	}

	public ConversionsImpl() {
		_units = new HashMap<String, Double>();

		_units.put("Millimeters", 1.0);
		_units.put("Meters", 1000.0);
		_units.put("Inches", 25.4);
		_units.put("Feet", 304.8);
		_units.put("Yards", 914.4);
	}

	private Set<String> availableUnits() {
		return _units.keySet();
	}

}
