# Golden Solution - A405

## Reference answer

(a) Gain ≈ −24.4, $\omega_{-3dB} \approx 395$ krad/s; (b) overall gain ≈ +24.7, each stage has $\omega_{-3dB} \approx 1.68$ Mrad/s and the cascade ≈ 1.08 Mrad/s. The cascade of two low-gain stages has about 2.7 times the bandwidth of the single high-gain stage for the same overall gain.
- Inverting amplifier with feedback factor $\beta = R_1/(R_1+R_2)$: closed-loop pole at $\omega_p(1+A_0\beta)$.
- (a) $\beta = 1/26$: $A_0\beta = 38.5$, $\omega_{-3dB} = 10^4(39.5) = 394.6$ krad/s (≈ $GB\cdot\beta$ = 385 krad/s, or $GB/25$ = 400 krad/s in the crudest approximation); gain $-25/(1+26/1000) = -24.4$.
- (b) $\beta = 1/6$: each stage $\omega_1 = 10^4(1+166.7) = 1.677$ Mrad/s, gain −4.97. Two identical poles in cascade: $\omega_{-3dB} = \omega_1\sqrt{\sqrt2-1} = 0.644\,\omega_1 = 1.08$ Mrad/s; overall gain $(4.97)^2 = 24.7$.

## Grading notes

+2: (a) ≈ 0.38–0.40 Mrad/s and (b) overall ≈ 1.0–1.3 Mrad/s (the cascade shrinkage factor $\sqrt{\sqrt2-1}$ applied; 1.29 Mrad/s if each stage is taken as $GB/5$ = 2 Mrad/s), with the conclusion that (b) is wider. Hz values are fine if labelled. The question does not ask for the closed-loop gains: quoting the nominal gains −25 for (a) and +25 for (b) ($R_F/R$) instead of the finite-gain values (−24.4, +24.7) is not an error. +1: per-stage bandwidth of (b) correct (1.7–2 Mrad/s) but given as the overall bandwidth (shrinkage ignored), with (a) correct and the conclusion right. 0: only one configuration analysed correctly. −2 (asserted as fact): (a) claimed wider than (b), bandwidth computed as the open-loop pole (10 krad/s) for both, or the cascade bandwidth claimed to be the sum of the stages' bandwidths.
