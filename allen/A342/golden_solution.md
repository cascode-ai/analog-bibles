# Golden Solution - A342

## Reference answer

$A_{vd} \approx \tfrac23(g_mr_{ds})^2$; differential output resistance $\approx \tfrac23 g_mr_{ds}^2$ (each output $g_mr_{ds}^2/3$).

- Input: M1, M2 are driven by $+v_{in}/2$ and M3, M4 by $-v_{in}/2$, all sharing the tail M5, so each device carries $\pm0.5g_mv_{in}$ (M1, M2: +; M3, M4: −).
- $v_{OUT}^+$ (drains of M9 and M11): M4's current change is folded through the cascode M9 ($+0.5g_mv_{in}$ into the output), and M1's change, folded through M16 into the cascode mirror M10/M12 → M11/M13, reduces the sink by $0.5g_mv_{in}$: net $g_mv_{in}$ (push–pull, $k$ ≈ 1 since the cascode source resistance ≈ $1/g_m$ ≪ $r_{ds}/2$). $v_{OUT}^-$ gets $-g_mv_{in}$ via M2–M8 and M3–M17–M18/M20–M19/M21.
- Output resistance per side: up, M9 over the folding node ($r_{ds7}\|r_{ds4} = r_{ds}/2$ for differential signals): $g_mr_{ds}^2/2$; down, the cascode mirror output: $g_mr_{ds}^2$; parallel $g_mr_{ds}^2/3$; between outputs $\tfrac23 g_mr_{ds}^2$.
- $v_{OUT}^\pm = \pm g_mv_{in}\cdot g_mr_{ds}^2/3$; $A_{vd} = \tfrac23(g_mr_{ds})^2$, twice the class A folded cascode (a nodal analysis gives 0.67 $(g_mr_{ds})^2$).

## Grading notes

+2: gain ≈ $\tfrac23(g_mr_{ds})^2$ differential (or $(g_mr_{ds})^2/3$ per output, labelled) and output resistance ≈ $\tfrac23 g_mr_{ds}^2$ differential ($g_mr_{ds}^2/3$ per output), with both push–pull paths contributing fully. +1: both right with unclear labelling, or a coefficient off by ≤ 25% from a different folding-node resistance estimate. 0: right structure (both push–pull paths, $\pm g_mv_{in}$ per output) but the folding-node resistance taken as $r_{ds}$ instead of $r_{ds}/2$ (the input device's $r_{ds}$ omitted), giving $A_{vd} \approx (g_mr_{ds})^2$ and $R_{od} \approx g_mr_{ds}^2$; or output resistance right but the gain reduced by an open-circuit current-division factor (e.g., $(g_mr_{ds})^2/2$ from $x(1+k)$ with $k$ = 0.5), or only one path counted. −2 (asserted as fact): gain or resistance of the wrong order (e.g., $g_mr_{ds}$ or $r_{ds}$), or the mirror path claimed to subtract from the direct path.
