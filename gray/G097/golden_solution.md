# Golden Solution - G097

## Reference answer

$V_{OUT} \approx 1.30$ V (1.299 V), compared with 1.262 V when $I_1 \propto T$.

- Write $I_1 \propto T^{\alpha}$ near $T_0$: $\alpha = T_0\cdot TC_F = 298\times(-1.5\times10^{-3}) = -0.447$.
- $V_{BE(\text{on})} = V_{G0} - V_T[(\gamma - \alpha)\ln T - \ln(EG)]$ ($E$, $G$ constants), so $V_{OUT} = V_{G0} - V_T(\gamma-\alpha)\ln T + V_T[M + \ln(EG)]$.
- $dV_{OUT}/dT = 0$ at $T_0$ gives $M + \ln(EG) = (\gamma-\alpha)(\ln T_0 + 1)$, and therefore $V_{OUT}(T_0) = V_{G0} + (\gamma - \alpha)V_{T0}$.
- $V_{OUT} = 1.205 + (3.2 + 0.447)(0.0257) = 1.205 + 0.094 = 1.299$ V (1.300 V with $V_T$ = 26 mV at 300 K). For a PTAT current ($\alpha = 1$) the value would be $1.205 + 2.2V_T = 1.262$ V.

## Grading notes

+2: $V_{OUT}$ in 1.295–1.302 V, with $\alpha = T\cdot TC_F \approx -0.45$ used in $V_{G0} + (\gamma-\alpha)V_T$ (or an equivalent derivation). +1: correct method with a slip of a few mV, or $\alpha$ computed at a slightly different temperature. 0: correct general result $V_{G0} + (\gamma-\alpha)V_T$ stated but the current's TC not converted to α. -2 (asserted as fact): sign of α wrong (giving ≈ 1.25 V), answer equal to the PTAT case (1.262 V), or $V_{OUT} = V_{G0}$ claimed exact.
