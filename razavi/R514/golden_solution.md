# Golden Solution - R514

## Reference answer

λ falls as the overdrive rises: about 5.2, 3.7, 2.8 and 2.2 V⁻¹ for $V_{GS} - V_{TH}$ = 200, 250, 300 and 350 mV. All of these are 20 to 50 times the values typical of long-channel devices (≈ 0.1 V⁻¹).

Method: with $I_D \propto 1 + \lambda V_{DS}$, the ratio $r = I_D(1\ \mathrm{V})/I_D(0.2\ \mathrm{V}) = (1+\lambda)/(1+0.2\lambda)$, so $\lambda = (r-1)/(1-0.2r)$.
Readings from the plot:
- 350 mV: 0.51 mA → 1.12 mA, $r \approx 2.21$, λ ≈ 2.2 V⁻¹.
- 300 mV: 0.34 mA → 0.81 mA, $r \approx 2.42$, λ ≈ 2.8 V⁻¹.
- 250 mV: 0.205 mA → 0.555 mA, $r \approx 2.71$, λ ≈ 3.7 V⁻¹.
- 200 mV: 0.116 mA → 0.35 mA, $r \approx 3.0$, λ ≈ 5.2 V⁻¹.
Trend: the relative slope of the characteristic, and so λ, grows as the overdrive (current density) falls. λ roughly halves from 200 mV to 350 mV, i.e., $r_O I_D$ increases with overdrive. The numbers are sensitive to the readings because λ diverges as $r$ approaches $1/0.2 = 5$; only the magnitude and the trend are meaningful.

## Grading notes

+2: the hint's method ($\lambda = (r-1)/(1-0.2r)$, or the equivalent straight line $I_D = I_0(1+\lambda V_{DS})$ through the two points), λ within about ±20% for 350 and 300 mV (1.8–2.6 and 2.3–3.3 V⁻¹) and about ±30% for 250 and 200 mV (2.6–4.8 and 3.6–6.8 V⁻¹), and the trend stated: λ decreases as $V_{GS} - V_{TH}$ increases. +1: right method and trend with one value outside these ranges through a reading slip, or a different reasonable definition of λ (e.g., slope divided by $I_D$ at 0.2 V, giving ≈ 1.5, 1.8, 2.1, 2.5 V⁻¹) with the right trend. 0: values roughly right but no trend stated, or the trend right with most values wrong through misreading. -2 (asserted as fact): λ increasing with overdrive, λ of order 0.1 V⁻¹, or the curves assigned in the wrong order (e.g., the top curve taken as 50 mV).
