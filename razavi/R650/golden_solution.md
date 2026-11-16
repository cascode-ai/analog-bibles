# Golden Solution - R650

## Reference answer

The information the loop needs is the dc (average) part of the PD output, which a high-pass filter removes. What a high-pass filter does pass is the unwanted high-frequency content.

- The PD output $V_{PD}$ has a dc (slowly varying) component $K_{PD}\Delta\phi$, which carries the phase error, plus high-frequency components (pulses or ripple at the input frequency or its harmonics, e.g., $2\omega_{in}$ for an XOR).
- In lock the VCO must run at $\omega_{in}$. That requires a steady control voltage $V_{cont} = (\omega_{in} - \omega_0)/K_{VCO}$, and this dc level must come from the PD through the filter.
- A high-pass filter has zero dc gain, so the average $V_{cont}$ is pinned at the filter's reference level. The VCO's average frequency then stays at its free-running value, and the loop cannot lock unless $\omega_{in}$ happens to equal that value. A static phase error produces only a transient correction that decays away.
- Linear-model view: with $H_{HPF} = s/(s + \omega_H)$, the loop gain is $K_{PD}\frac{s}{s+\omega_H}\frac{K_{VCO}}{s} = \frac{K_{PD}K_{VCO}}{s + \omega_H}$. The filter's zero at the origin cancels the VCO's integrator, and the dc loop gain becomes finite. An input frequency step Δω then leaves a permanent frequency error $\Delta\omega\,\omega_H/(\omega_H + K_{PD}K_{VCO})$; the phase error ramps without bound (cycle slipping), so $\omega_{out} = \omega_{in}$ is lost.
- At the same time, the high-pass filter passes the high-frequency PD components straight to the VCO and modulates its frequency strongly (large ripple, sidebands, jitter). Suppressing these is exactly what the filter is for.

## Grading notes

+2: two points are needed. First, the useful (phase-error) information is the dc or low-frequency component of the PD output, which a high-pass filter blocks; so the VCO cannot be held at a frequency other than its free-running one, and the loop cannot lock or track. Second, the high-pass filter would pass the undesired high-frequency PD components to the VCO. +1: the dc-blocking argument well explained (lock impossible) without the ripple point, or the ripple point with only a vague mention of the dc component. 0: only "the PD output contains high-frequency components that must be removed", with no mention that the dc component is needed. -2 (asserted as fact): the loop would still lock with only more ripple or a different bandwidth, or the phase information is claimed to be carried by the high-frequency components.
