# Golden Solution - A072

## Reference answer

$W/L \approx 2.64$ (for example $W = 2.64\ \mu$m, $L = 1\ \mu$m).

- The response is a single pole: 0 dB up to a corner at 20 MHz, then −20 dB/decade (−6 dB/octave). The circuit is an RC low-pass with $v_{out}/v_{in} = 1/(1 + s r_{ON} C)$.
- Required $r_{ON} = 1/(2\pi \times 20\ \mathrm{MHz} \times 2\ \mathrm{pF}) = 3.98\ \mathrm{k\Omega}$.
- Bias: both channel terminals at 3 V ($v_{DS} = 0$), $V_{GS} = 2$ V, $V_{SB} = 3$ V, $V_T = 0.7 + 0.4(\sqrt{3.7} - \sqrt{0.7}) = 1.135$ V, so $V_{GS} - V_T = 0.865$ V.
- $r_{ON} = 1/[K'(W/L)(V_{GS} - V_T)]$ → $W/L = 1/(110\ \mu\mathrm{A/V^2} \times 0.865\ \mathrm{V} \times 3979\ \Omega) = 2.64$.

## Grading notes

+2: $W/L$ = 2.5–2.8 obtained from $r_{ON}C = 1/(2\pi \cdot 20\ \mathrm{MHz})$ with the body effect at $V_{SB} = 3$ V. Small numerical slips in optional checks that do not affect the design (e.g. the exact attenuation at frequencies above the corner) are trivial and do not lower +2. +1: correct method with a small arithmetic slip, or a design that states only $W$ and $L$ whose ratio is in range. 0: body effect ignored ($V_T = 0.7$ V, giving $W/L \approx 1.76$) with the method otherwise right. −2 (asserted as fact): corner frequency misread (e.g. 2.5 MHz or 160 MHz), $\omega$ and $f$ confused (giving $W/L \approx 0.42$ or 16.6), the saturation model used, or $V_{GS}$ taken as 5 V.
