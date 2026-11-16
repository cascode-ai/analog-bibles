# Golden Solution - G159

## Reference answer

The dc output with zero input is $V_O = V_{DD} - |V_{t3}| - |V_{ov3}|$, so
$$V_{OS(sys)} = \frac{\dfrac{V_{DD}-V_{SS}}{2} - \left(V_{DD} - |V_{t3}| - |V_{ov3}|\right)}{A_v} = \frac{\dfrac{V_{DD}+V_{SS}}{2} - |V_{t3}| - |V_{ov3}|}{|A_v|}\quad(\text{as } v_{G1}-v_{G2}),$$
with $A_v = -g_{m1}(r_{o2}\parallel r_{o4})g_{m6}(r_{o6}\parallel r_{o7})$ the (negative) op-amp gain. It is nonzero unless $|V_{GS3}| = (V_{DD}+V_{SS})/2$.

- With zero input and perfect matching, $V_{SD4} = V_{SD3} = |V_{GS3}|$ (the only point where the currents of $M_2$ and $M_4$ agree), so the second stage sees $|V_{GS6}| = |V_{GS3}|$.
- $|I_{D3}| = I_{D5}/2$ and $|I_{D6}| = I_{D7} = I_{D5}(W/L)_7/(W/L)_5$ ($M_5$, $M_7$ share the gate voltage). The aspect-ratio condition makes $|I_{D3}|/(W/L)_3 = |I_{D6}|/(W/L)_6$: $M_3$, $M_4$ and $M_6$ have equal current densities and overdrives, so $M_6$ carries exactly the current $M_7$ supplies with $|V_{GS6}| = |V_{GS3}|$ and the same drain-source voltage.
- Hence $V_{SD6} = V_{SD3} = |V_{t3}| + |V_{ov3}|$ and $V_O = V_{DD} - |V_{t3}| - |V_{ov3}|$. Moving the output to the midpoint $(V_{DD}-V_{SS})/2$ takes an input of (midpoint $-V_O$)$/A_v$.
- Because $A_v < 0$, an output that sits above the midpoint (the usual case, $|V_{GS3}| < (V_{DD}+V_{SS})/2$) needs a positive $v_{G1} - v_{G2}$. The offset is small, of order (output error)/$(g_mr_o)^2$.
- Premise (the textbook approximation, implied by the requested form): $M_6$ is treated as a replica of $M_3$ with finite $r_o$ in the p-channel devices, while $M_5$ and $M_7$ are taken as ideal current sources, so $I_{D7}/I_{D5} = (W/L)_7/(W/L)_5$ exactly.
- Other readings. (i) Strict square law with $\lambda = 0$ everywhere: the currents balance at $v_i = 0$ for any output voltage that keeps $M_6$, $M_7$ saturated, so the output is not determined, the gain is infinite and the offset is zero; this model cannot produce the requested $A_v$-dependent result. (ii) $\lambda$ kept in every device: $|I_{D6}| = I_{D7}$ requires $(1+|\lambda_p|V_{SD6})/(1+|\lambda_p|V_{SD3}) = (1+\lambda_nV_{DS7})/(1+\lambda_nV_{DS5})$, which to first order gives $V_O \approx (|\lambda_p|x + \lambda_n V_S)/(|\lambda_p|+\lambda_n)$ with $x = V_{DD} - |V_{GS3}|$ and $V_S$ the tail-node voltage. This is not a small correction (for $\lambda_n \approx |\lambda_p|$, $V_O$ sits roughly midway between $x$ and $V_S$, and moves with the input common-mode level), so the offset then also depends on $V_S$ and the $\lambda$'s and cannot be written in the requested variables alone. Level-1 simulation ($\pm2.5$ V, $|V_{GS3}| = 0.92$ V): with $\lambda_n = 0$, $\lambda_p = 0.05$, $V_O(0) = 1.58$ V and $V_{OS} = 30\ \mu$V, matching the formula; with $\lambda = 0.05$ in all devices, $V_O(0) = 0.38$ V ($V_{CM} = 0$) or 0.88 V ($V_{CM} = 1$ V) and $V_{OS} = 26$ or 66 $\mu$V.

## Grading notes

The question asks for the result in terms of $V_{DD}$, $V_{SS}$, $V_{t3}$, $V_{ov3}$ and $A_v$, which fixes the textbook approximation above; grade against it.
+2: $V_O = V_{DD} - |V_{t3}| - |V_{ov3}|$ (the p-mirror diode drop below $V_{DD}$) and $V_{OS} = [\text{midpoint} - V_O]/A_v$ or its magnitude form, with the equal-current-density argument. Either sign convention is fine if stated. Also +2: an answer that first notes that strict $\lambda = 0$ gives zero offset and an undetermined output and then gives this result as the finite-gain answer; or one that keeps $\lambda$ in all devices, derives the dependence on the tail voltage correctly and states that the requested form follows when $M_5$/$M_7$ are ideal current sources. Do not penalize the remark that full channel-length modulation shifts $V_O$; it is correct (the effect is not small).
+1: correct $V_O$ and formula with the sign left ambiguous, or the midpoint written as $(V_{DD}+V_{SS})/2$ measured from $-V_{SS}$ consistently.
0: correct idea but $V_O$ expressed relative to the wrong supply through a slip; or a final answer $V_{OS} = 0$ given explicitly for the ideal $\lambda = 0$ model with a correct current-balance argument but no finite-gain result.
-2 (asserted as fact): $V_O = -V_{SS} + V_{t3} + V_{ov3}$ (the unreversed circuit's result); the offset not divided by the gain; or $V_{OS} = 0$ asserted for the finite-gain op amp (while using finite $r_o$ or $A_v$) because the aspect-ratio condition holds.
