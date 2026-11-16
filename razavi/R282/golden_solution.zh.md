$R_{on,R}\,g_{m,B} = \dfrac{(W/L)_B}{(W/L)_R}\exp\!\left(\dfrac{V_{GS,B} - V_{GS,R}}{V_T}\right) = \dfrac{(W/L)_B}{(W/L)_R}\exp\!\left(\dfrac{2V_B - V_G}{V_T}\right)$。这里假设两管的阈值电压（threshold voltage）相等；若阈值电压不同，指数变为 $[(V_{GS,B}-V_{TH,B}) - (V_{GS,R}-V_{TH,R})]/V_T$。

- $M_B$：$V_{GS,B} = V_B$（其漏极/栅极节点的电压），$g_{m,B} = I_B/V_T = \mu C_d(W/L)_BV_T\exp[(V_B - V_{TH})/V_T]$。
- $M_R$：沟道两端都处于 $V_B$（没有直流电流，$M_1$ 的栅极也不取电流），因此 $V_{GS,R} = V_G - V_B$，$R_{on,R} = 1/\{\mu C_d(W/L)_RV_T\exp[(V_G - V_B - V_{TH})/V_T]\}$。
- 两式相乘即得上述乘积。若选择 $V_G$ 使 $V_{GS,R} = V_{GS,B}$（即 $V_G = 2V_B$），则 $R_{on,R} = \dfrac{(W/L)_B}{(W/L)_R}\cdot\dfrac{1}{g_{m,B}}$。由于指数关系使 $R_{on,R}$ 对 $V_G - V_B$ 非常敏感，要得到一个大而确定的电阻，就需要 $V_G$ 跟踪 $V_B$；较小的 $(W/L)_R$ 和较大的 $(W/L)_B$ 会使 $R_{on,R}$ 增大。
- 另外，$M_R$ 的源极处于 $V_B$ 而衬底（bulk）接地，因此其阈值电压略高于 $M_B$；这会引入一个因子 $\exp[(V_{TH,R}-V_{TH,B})/V_T]$。
