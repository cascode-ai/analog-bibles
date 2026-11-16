# Golden Solution - A099

## Reference answer

$I_{REF}$ ranges from ≈ 3.9 µA to ≈ 20.1 µA (nominal ≈ 8.5 µA at 25 °C, 5 V): about −54% to +136% of nominal.

- $I_{REF} = I_1 = (V_{DD} - V_{GS1})/R$ with $V_{GS1} = V_T + \sqrt{2I_1/(K'\cdot100)}$ (the overdrive is only 30–60 mV here). Nominal: $(5 - 0.7 - 0.039)/500\ \mathrm{k} = 8.52\ \mu$A.
- $R(T) = R_{25}(1 + 0.008(T - 25))$ with $R_{25}$ = 300–700 kΩ; $V_T(T) = V_{T,25} - 2.3\ \mathrm{mV}\times(T - 25)$.
- Minimum current (70 °C, $V_{DD}$ = 4.5 V, $R_{25}$ = 700 kΩ → $R$ = 952 kΩ, $V_{T,25}$ = 0.85 V → $V_T$ = 0.747 V, $K'$ = 99 µA/V²): $I = (4.5 - 0.747 - 0.028)/952\ \mathrm{k} = 3.91\ \mu$A.
- Maximum current (0 °C, $V_{DD}$ = 5.5 V, $R_{25}$ = 300 kΩ → $R$ = 240 kΩ, $V_{T,25}$ = 0.55 V → $V_T$ = 0.608 V, $K'$ = 121 µA/V²): $I = (5.5 - 0.608 - 0.058)/240\ \mathrm{k} = 20.1\ \mu$A.
- The resistor dominates: ±40% from process and +36%/−20% over temperature, plus ±10% from the supply. The threshold variation contributes only a few percent.

## Grading notes

+2: a consistent worst-case analysis giving a minimum of 3.7–4.0 µA and a maximum of 19.8–21.5 µA (or the equivalent total spread of about 16–17.5 µA), with the resistor's process and temperature variation and the supply variation all included. +1: the method right with one corner mis-chosen (result within about 15% of these bounds), or only the bounds without the nominal. 0: only some of the variations included (e.g. the resistor temperature coefficient omitted, giving roughly 5.2–16.3 µA). −2 (asserted as fact): $I_{REF}$ said to be independent of $V_{DD}$, the resistor's ±40% or 8000 ppm/°C ignored altogether, or currents in the milliampere or nanoampere range from a unit error.
