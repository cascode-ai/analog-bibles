# Golden Solution - R649

## Reference answer

$t_2 - t_1 = \dfrac{2\pi - \phi_0}{2\pi(f_H - f_L)} = \dfrac{1 - \phi_0/2\pi}{f_H - f_L}$.

Waveforms: $V_{CK}$ is unchanged. $V_{cont}$ steps down at $t_1$ and returns to its original level at $t_2$. Between $t_1$ and $t_2$ the period of $V_{out}$ is longer ($1/f_L$), so its edges fall progressively further behind those of $V_{CK}$. At $t_2$ the VCO has slipped by exactly one full cycle in total. Each of its rising edges then coincides with a rising edge of $V_{CK}$, one reference cycle later than the edge it was originally following. After $t_2$ the frequency is back at $f_H$ and the waveforms stay aligned. Over the interval the VCO completes $1 - \phi_0/2\pi$ fewer cycles than the reference.

Derivation:
- The VCO starts with a lag of $\phi_0$. With its frequency lowered, the lag grows at $2\pi(f_H - f_L)$ rad/s.
- The edges are aligned when the total lag is a multiple of 2π. The first such moment is when the lag reaches 2π, i.e., after an additional $2\pi - \phi_0$: $2\pi(f_H - f_L)(t_2 - t_1) = 2\pi - \phi_0$.
- Any $t_2 - t_1 = (2\pi k - \phi_0)/[2\pi(f_H - f_L)]$ with k = 1, 2, … also works; k = 1 is the minimum.
- In terms of the time skew $\Delta t = \phi_0/(2\pi f_H)$: $t_2 - t_1 = (1/f_H - \Delta t)\,f_H/(f_H - f_L)$.
- For comparison, raising the frequency (as in the figure) needs only $\phi_0$ of phase gain.

## Grading notes

+2: $t_2 - t_1 = (2\pi - \phi_0)/[2\pi(f_H - f_L)]$ or an equivalent form, with the reasoning that a lower frequency makes the VCO slip back until its edges meet the next reference edges (total lag 2π). Also needed: a correct description of the redrawn waveforms ($V_{cont}$ stepped down between $t_1$ and $t_2$, a longer VCO period, edges drifting later until they coincide with $V_{CK}$ edges). +1: correct time with a sketchy or partly missing waveform description. 0: right reasoning with a 2π (Hz versus rad/s) conversion slip in the result, or correct waveforms with the time left undetermined. -2 (asserted as fact): $t_2 - t_1 = \phi_0/[2\pi(f_H - f_L)]$ (treating the lower frequency as removing the lag directly), a claim that lowering the frequency cannot align the phases, or waveforms with a shorter VCO period between $t_1$ and $t_2$.
