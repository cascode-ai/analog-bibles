- 结电容：单位面积结电容的增大不到 α 倍，因此源/漏总电容的减小略多于 α 倍。这是一个小小的好处，只要结仍是强单边结（one-sided junction），就可以忽略。
- 串联电阻：它约增大到 α 倍（接触电阻最多增大到 α² 倍），而不是保持不变。这是主要的代价。
- DIBL：它不会变得更显著。如果说有变化，反而会略微减弱，因为多出来的耗尽宽度出现在结的源/漏一侧，而不在沟道中。

推导如下。设衬底掺杂为 $N_A$，源/漏掺杂为 $N_D$，反向偏压满足 $V_R \gg$ 内建电势（built-in potential）。
- 耗尽宽度：$W_d = \sqrt{(2\epsilon_{si}/q)(1/N_A + 1/N_D)V_R}$。当 $N_A \to \alpha N_A$、$N_D$ 不变、$V_R \to V_R/\alpha$ 时，$W_d \to \frac{1}{\alpha}\sqrt{(2\epsilon_{si}/q)(1/N_A + \alpha/N_D)V_R}$，其减小不到 α 倍。
- 电容：$C_j = \epsilon_{si}/W_d$ 增大到 $\alpha\sqrt{(N_A+N_D)/(\alpha N_A+N_D)} < \alpha$ 倍。底面面积减小 α² 倍，因此底面电容（bottom-plate capacitance）的减小多于 α 倍。单位宽度的侧壁电容（sidewall capacitance）$\approx C_jx_j$，由于结深变为 $x_j/\alpha$，它略有减小，而不是保持不变。在通常的 $N_D \gg \alpha N_A$ 情况下，与理想按比例缩小的差别很小；当 $\alpha N_A$ 接近 $N_D$ 时差别才变大。（内建电势的增量也较小：增大 $V_T\ln\alpha$，而不是 $2V_T\ln\alpha$。）
- 串联电阻：源/漏的方块电阻（sheet resistance）为 $R_\square = 1/(q\mu_nN_Dx_j)$。理想按比例缩小（$N_D \times \alpha$，$x_j/\alpha$）会使它保持不变；而 $N_D$ 固定时，它增大到 α 倍。源/漏区的方块数（E/W）不变，因此其电阻增大到 α 倍。接触面积减小 α² 倍，而比接触电阻率（specific contact resistivity）并未改善，因此接触电阻最多增大到 α² 倍。
- 串联电阻的影响：沟道电阻 $1/[\mu C_{ox}(W/L)(V_{GS}-V_{TH})]$ 在按比例缩小时保持不变，因此寄生电阻所占的比例越来越大。它们造成源极负反馈（source degeneration），即 $g_{m,eff} = g_m/(1+g_mR_S)$，并降低驱动电流和开关的导通电导。
- DIBL：关键在于漏极耗尽区向沟道延伸多远，即其 p 侧宽度 $x_p = W_dN_D/(N_A+N_D) = \sqrt{(2\epsilon_{si}V_R/q)\,N_D/[N_A(N_A+N_D)]}$。在 $N_D$ 固定的条件下按比例缩小后，$x_p \to \frac{1}{\alpha}\sqrt{(2\epsilon_{si}V_R/q)\,N_D/[N_A(\alpha N_A+N_D)]}$，小于理想按比例缩小时的值 $x_p/\alpha$。因此耗尽区向沟道一侧的延伸至少与 L 缩小得一样快。多出来的耗尽宽度位于漏极一侧（$x_n = x_pN_A/N_D$ 比其理想缩放值 $x_n/\alpha$ 大，相对于 L 也更大，但绝对值并未增大），在那里它不会降低源端势垒。有电流流过时，漏极串联电阻还会降低内部的 $V_{DS}$。因此 DIBL 略有减弱；对于强单边结则基本不变。
- 不按比例缩小的电势（这是另一个效应，即使 $N_D$ 按比例变化也存在）：若保留内建电势和体费米势（它们不除以 α），耗尽宽度的缩小就慢于 $1/\alpha$。于是单位面积结电容的增大介于 $\sqrt\alpha$（零偏）与 α 倍之间，总电容按 $\alpha^{-3/2}$ 到 $\alpha^{-1}$ 的因子变化，沟道侧耗尽宽度和特征长度（scale length）的缩小也慢于 L，因此在实际的体硅按比例缩小中，DIBL 总体上会恶化。但这并不改变关于固定源/漏掺杂本身的结论：它不会使 DIBL 恶化。
