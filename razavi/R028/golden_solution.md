# Golden Solution - R028

## Reference answer

The supplied values do not determine a unique waveform. For the channel-only ideal model,
$$V_G=I_1t/C_2,\qquad I_X=I_1+I_D=-C_1\dot V_X,$$
but the floating two-node KCL is inconsistent for $I_1\ne0$. Junctions, parasitic capacitors and current-source compliance must be specified.

For the explicit example shown in the figures, $3C_1>V_{TH}C_2$ gives an initially off interval with
$$V_X=3\,\mathrm V-\frac{I_1}{C_1}t,\qquad t_1=\frac{V_{TH}C_2}{I_1},\qquad I_X\approx I_1.$$
Then channel current rises in saturation, triode entry follows, and the terminal-current peak occurs after triode entry. If $3C_1\le V_{TH}C_2$, X reaches $V_X=0$ before or at turn-on and there is no positive-drain saturation plateau.

The figures use one stated junction and parasitic-capacitance completion. Here $I_X$ is conductive drain-terminal current. A drain-body capacitance would add a displacement-current term if included. The negative-voltage tail and final values are model-dependent.

## Answer figures

![V_X and V_S versus time](/q/R028/solution-voltage.svg)

![I_X versus time](/q/R028/solution-current.svg)

![Negative-extension current tail](/q/R028/solution-current-tail.svg)

## Grading notes

+2: states the floating-capacitor KCL issue, gives the correct conditional ramp and ordering condition, distinguishes terminal current from channel current, includes both requested waveforms, and states that missing junction, parasitic and compliance data prevent a unique endpoint. A clearly stated physical completion earns the same credit.
+1: identifies the missing path and main ramp but omits one current definition or waveform condition.
0: mixes ideal and completed models without declaring the assumptions.
−2: asserts an unconditional $I_X=I_1$ discharge or a universal negative clamp.
