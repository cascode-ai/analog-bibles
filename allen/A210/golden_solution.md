# Golden Solution - A210

## Reference answer

$R_{out} \approx 1/g_{m1}$ ≈ 408 Ω (looking into the amplifier; ≈ 391 Ω if the 10-kΩ load is included).

At $v_{OUT}$ = 0 the resistor carries no current, so M1 carries the 200 µA: $g_{m1} = \sqrt{2\cdot50\cdot300\cdot200}$ µS = 2.45 mS → 408 Ω; $g_{ds1}$ = 10 µS changes it to 407 Ω; the ideal current source adds nothing; in parallel with $R_L$: 391 Ω. If the $(1+\lambda V_{SD})$ factor is kept in the bias ($V_{SD1}$ = 2.5 V, $V_{OV1}$ = 0.154 V), $g_{m1} = 2I_D/V_{OV1}$ = 2.60 mS and $R_{out}$ ≈ 384 Ω (369 Ω with $R_L$); this is equally correct.

## Grading notes

+2: ≈ 408 Ω (380–410 Ω; about 384 Ω if the $(1+\lambda V_{SD})$ factor is kept in the bias so that $g_{m1}$ ≈ 2.6 mS, which is equally correct), or 365–395 Ω with $R_L$ included and stated. +1: correct method with the bias current taken incorrectly by a small amount. 0: correct expression without a value. −2 (asserted as fact): $R_{out}$ = $r_{ds}$ or 10 kΩ, or a value based on a bias current other than ≈ 200 µA by a large factor (e.g. 358 µA from the $v_{OUT}(\min)$ condition).
