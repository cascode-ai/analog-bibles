# Detailed solution - A077

Check which quantities in the slow-regime error depend on the pulse amplitude $V_H$, and trace what happens to the injected charge while the switch is still on. Then examine how a smaller gate overdrive affects the charging of $C_1$ during the pulse.

### Step 1 — Where $V_H$ enters the feedthrough

The slow-regime error

$$
V_{error}=\frac{W\cdot\mathrm{CGDO}+C_{channel}/2}{C_L}\sqrt{\frac{\pi UC_L}{2\beta}}+\frac{W\cdot\mathrm{CGDO}}{C_L}\,(V_S+V_T-V_L)
$$

contains the slope $U$, the low level $V_L$, the turn-off voltage $V_S+V_T$ and device and capacitor sizes, but not $V_H$. The reason is physical: while the falling gate is above $V_S+V_T$, the switch is on and is slow enough to return the released charge (channel charge and overlap-coupled charge) to the low-impedance 2-V source. Only the residual channel charge near turn-off (first term) and the overlap coupling for the swing from $V_S+V_T$ down to $V_L$ (second term) reach $C_1$. The part of the pulse above $V_S+V_T$ therefore leaves no error.

- If the slope $U$ and $V_L$ are kept, reducing $V_H$ does not change the feedthrough.
- If instead the 10-ns fall time of [Fig. 1] is kept, $U=(V_H-V_L)/t_f$ falls in proportion to the amplitude, so the first term shrinks as $\sqrt U$ and the feedthrough decreases slightly; the second term is unchanged.

### Step 2 — Effect on the accuracy of the transfer

A smaller amplitude reduces the overdrive of M1 during the pulse, $V_{HT}=V_H-V_S-V_T$. The ON resistance $r_{ON}=1/[K'(W/L)V_{HT}]$ therefore rises, and the charging time constant $r_{ON}C_1$ grows. Consequences:

- for a given pulse width, $C_1$ may not settle fully to $V_S$, adding a settling error that the feedthrough analysis does not include;
- the range of input voltages the switch can pass shrinks, because it conducts only for $V_S<V_H-V_T$, with $V_T$ itself rising with $V_S$ through the body effect;
- with a small $V_{HT}$ the slow-regime condition $\beta V_{HT}^2/(2C_L)\gg U$ may fail, so the error formula, and the conclusion of Step 1, no longer apply.

### Step 3 — Conclusion

Reducing the magnitude of the $\phi_1$ pulse does not change the slow-regime charge feedthrough when the fall slope is kept (and reduces it slightly if the fall time is kept), but it degrades the accuracy of the voltage transfer: the higher ON resistance slows the charging and limits the signal range, unless the pulse is long enough for complete settling.
