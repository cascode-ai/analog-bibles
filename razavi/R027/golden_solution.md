# Golden Solution - R027

## Reference answer

The supplied data do not determine a unique pair of waveforms. The channel-only floating-island KCL is
$$I_X+i_C=0\quad(\mathrm X),\qquad I_X+i_C=I_1\quad(\mathrm S),$$
so it is inconsistent for $I_1\ne0$. Grounded-body junctions, parasitic capacitances and current-source compliance are required to complete the model.

In this answer $I_X$ is the conductive drain-terminal current. A probe that includes drain-body capacitance measures $I_X+C_{DB}\,dV_X/dt$. One explicit completion gives a rapid common-mode fall, a channel-current pulse, triode relaxation and a DC state with $I_X=0$ but $I_{ch}\approx0.0300\,\mathrm{mA}$.

## Answer figures

![V_X and V_S versus time](/q/R027/solution-voltage.svg)

![I_X and I_ch versus time](/q/R027/solution-current.svg)

The plots are one parameterized example, with $C_1=1\,\mathrm{pF}$, $C_{px}=C_{ps}=20\,\mathrm{fF}$, $I_1=0.10\,\mathrm{mA}$ and $V_b=1.5\,\mathrm V$.

## Grading notes

+2: establishes the floating-island KCL inconsistency, distinguishes total drain-terminal current from channel current, and states the missing junction, parasitic-capacitance and compliance data. A clearly conditioned physical example is acceptable.
+1: identifies a missing path or floating-node motion but omits the current-definition distinction.
0: mixes ideal and completed models without stating assumptions.
−2: asserts an unconditional $I_X=I_1$ ramp, a universal clamp, or exact capacitor equalization with nonzero residual channel current.
