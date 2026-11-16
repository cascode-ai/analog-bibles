# Golden Solution - A387

## Reference answer

One valid design: an uncompensated two-stage comparator (n-channel input pair M1–M2, p-channel mirror M3–M4, tail M5, p-channel output M6, n-channel sink M7, bias diode M8 with a 20 µA reference), all $L = 1\ \mu$m:
$(W/L)_1 = (W/L)_2 = 4$, $(W/L)_3 = (W/L)_4 = 2$, $(W/L)_5 = (W/L)_8 = 4$ ($I_5 = 20\ \mu$A), $(W/L)_6 = 20$, $(W/L)_7 = 20$ ($I_6 = I_7 = 100\ \mu$A).

Checks:
- Power: $3\ \mathrm{V}\times(20+20+100)\ \mu\mathrm{A} = 0.42$ mW < 2 mW.
- Gain: $g_{m1} = \sqrt{2\cdot110\cdot4\cdot10}\ \mu\mathrm{S} = 93.8\ \mu$S, $g_{ds2}+g_{ds4} = 10\ \mu\mathrm{A}(0.09) = 0.9\ \mu$S → 104; $g_{m6} = \sqrt{2\cdot50\cdot20\cdot100}\ \mu\mathrm{S} = 447\ \mu$S, $g_{ds6}+g_{ds7} = 9\ \mu$S → 49.7; $A_{v0} \approx 5200 > 2200$. ($V_{SG6} = V_{SG4} = 1.147$ V, so the mirror is balanced: $(W/L)_6/(W/L)_4 = 2I_6/I_5$.)
- ICMR: $V_{icm}(\max) = V_{DD}-V_{SG3}+V_{TN} = 3-1.147+0.7 = 2.55$ V ≥ 2.5 V; $V_{icm}(\min) = V_{DS5}(\mathrm{sat})+V_{GS1} = 0.30+0.91 = 1.21$ V ≤ 1.5 V.
- Output swing: $V_{OL} \approx 0$ V (M6 off); $V_{OH} \approx 2.84$–2.94 V depending on the common mode (M6 in triode against 100 µA) — well beyond 1.5 V from either rail.
- Delay (slewing, following load trips at 1.5 V): second-stage trip $V_{TRP2} = 3-1.147 = 1.85$ V; $C_I \approx C_{gs6}+$ drain capacitances ≈ 0.05–0.1 pF. Rising output: $t_{fo1} \approx 0.1\ \mathrm{pF}\times1.15\ \mathrm{V}/20\ \mu\mathrm{A} \approx 6$ ns, $t_{r,out} \approx 3\ \mathrm{pF}\times1.5\ \mathrm{V}/(\approx 0.35-0.1)\ \mathrm{mA} \approx 18$ ns; falling output: $t_{ro1} \approx 4$ ns, $t_{f,out} = 3\ \mathrm{pF}\times1.5\ \mathrm{V}/100\ \mu\mathrm{A} = 45$ ns. Average ≈ 37 ns ≪ 1 µs. Linear (small-overdrive) response: poles ≈ $0.9\ \mu\mathrm{S}/0.1\ \mathrm{pF} = 9\times10^6$ and $9\ \mu\mathrm{S}/3\ \mathrm{pF} = 3\times10^6$ rad/s, giving ≈ 60 ns for a 10× overdrive, still far below 1 µs.

## Grading notes

This is a design problem: accept any design (any reasonable comparator topology) that meets every stated specification with correct supporting calculations. The question does not state the input step for the delay test: any explicitly stated, reasonable overdrive (from about 10 mV up to a large step) is acceptable for the delay check. As written, the swing requirement only needs $V_{OH} \ge 1.5$ V and $V_{OL} \le 1.5$ V, so stating the design's actual $V_{OH}$ and $V_{OL}$ is enough for that check. +2: complete sizing and bias with explicit checks of power (< 2 mW), gain (> 2200), ICMR (1.5–2.5 V with all devices saturated), output swing, and propagation delay (< 1 µs, by a slewing and/or linear-response estimate). +1: valid design with one check missing or slightly wrong (e.g., delay not estimated, or ICMR checked at one end only). 0: a plausible topology with incomplete sizing or one specification clearly not verified. −2 (asserted as fact): a design claimed to meet the specifications that violates one (e.g., power above 2 mW, gain below 2200, input pair cut off or tail triode at $V_{icm} = 1.5$ V, PMOS load in triode at $V_{icm} = 2.5$ V), or the gain computed with wrong formulas.
