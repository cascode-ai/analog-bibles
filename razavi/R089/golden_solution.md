# Golden Solution - R089

## Reference answer

With $u=V_{in}-V_{TH}$ and $V_{TH}=0.7$ V, the node equation is $(V_{DD}-V_{out})/R_D+(V_{in}-V_{out})/R_F=I_D$.

- Cutoff ($u\le0$): $V_{out}=(R_FV_{DD}+R_DV_{in})/(R_D+R_F)$. The positive divider slope continues through turn-on at 0.7 V.
- Saturation ($0<u\le V_{out}$): $I_D=\beta u^2/2$. The slope is $(1/R_F-g_m)(R_D\|R_F)$ with $g_m=\beta u$. A peak occurs at $V_{in}=V_{TH}+1/(\beta R_F)$ if the point lies within the saturation segment and sweep.
- At the triode boundary $V_{out}=u$, so $\beta u^2/2+u/R_D=V_{DD}/R_D+V_{TH}/R_F$. Use the positive root to check whether $V_{in}=V_{TH}+u$ is within the sweep. Beyond it, use $I_D=\beta(uV_{out}-V_{out}^2/2)$. In the example, the falling curve flattens to 0.489 V at 3 V.

![Example transfer characteristic](/q/R089/solution-01.svg)

## Grading notes

+2: rising divider line below 0.7 V, turn-on at 0.7 V, a maximum where $g_m = 1/R_F$ (or at least the statement that the feedforward through $R_F$ keeps $V_{out}$ rising briefly before it falls), then an inverting fall with triode entry at $V_{out} = V_{in} - 0.7$ V and a low final value. +1: the peak missed (fall starting right at 0.7 V) but otherwise correct. 0: $V_{out}$ taken as $V_{DD}$ below 0.7 V (ignoring $R_F$) with a correct falling part. -2 (asserted as fact): non-inverting overall, saturation and triode regions swapped, or $R_F$ treated as feedback through a source resistance so that the gain is set by $R_F$ alone.

