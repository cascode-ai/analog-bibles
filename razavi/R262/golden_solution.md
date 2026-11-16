# Golden Solution - R262

## Reference answer

$V_X$ ramps up almost linearly (slope ≈ $I_{REF}/C_1$, slightly more because of body effect) from $V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$; a real current source runs out of headroom as $V_X$ approaches $V_{DD}$ and the ramp stops there, while an ideal one would keep $V_X$ ramping (the question does not say which, so both readings are acceptable). $V_Y$ starts at $V_{DD} - R_1I_{REF}$ and falls as $M_1$'s gate voltage rises, ending at a low value with $M_1$ deep in triode.

- $I_{REF}$ has no path other than $M_2$ into $C_1$: $V_{S2} = I_{REF}t/C_1$, and $V_X = V_{S2} + V_{TH}(V_{S2}) + \sqrt{2I_{REF}/\beta}$ ($V_{TH}$ rising with $V_{SB2} = V_{S2}$).
- At $t = 0^+$ both sources are at ground, so $M_1$ copies $I_{REF}$: $V_Y(0^+) = V_{DD} - R_1I_{REF}$ (assuming $M_1$ saturated).
- As $V_X$ rises, $I_{D1} = \tfrac{\beta}{2}(V_X - 0.7)^2$ grows quadratically, $V_Y$ drops, $M_1$ enters triode, and $V_Y$ approaches $V_{DD}R_{on1}/(R_1+R_{on1})$, with $R_{on1}$ the on-resistance at $V_{GS1} \approx V_{DD}$.
- With an ideal source the ramp would continue indefinitely; with a real one $V_X$ saturates near $V_{DD}$ and $C_1$ ends at about $V_{DD} - V_{TH2}$ (body effect) as $M_2$'s current dies out.

## Grading notes

+2: $V_X$ starting at $V_{GS}(I_{REF})$ and ramping linearly at ≈ $I_{REF}/C_1$ (C1 charged by $I_{REF}$ through $M_2$), either limited near $V_{DD}$ by the source's headroom or, with $I_{REF}$ read as ideal, continuing to ramp (both readings are accepted; a remark on the compliance limit is welcome but not required); $V_Y$ starting at $V_{DD} - R_1I_{REF}$ and falling (M1 into triode) to a low value. +1: correct shapes with the initial value of $V_Y$ missing. 0: $V_X$ right but $V_Y$ wrong in trend. -2 (asserted as fact): $V_X$ constant at $V_{GS}$ (capacitor ignored), $V_Y$ rising toward $V_{DD}$, or an exponential settling of $V_X$ to a level set by $R_1$.
