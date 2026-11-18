三个晶体管串联，因此 $i_{D1} = i_{D2} = i_{D3} = I$，其中 $I = \frac{\beta_3}{2}(V_{DD}-V_{GG3}-|V_{T3}|)^2$ 由饱和的 M3 决定。

- M1（栅极接 $V_{DD}$，深度非饱和）：$I \cong \beta_1(V_{DD}-V_{T1})v_{DS1}$ → $v_{DS1} = \dfrac{I}{\beta_1(V_{DD}-V_{T1})}$。
- M2：其栅源电压为 $V_{GG2} - v_{DS1}$，漏源电压为 $v_{DS2} = v_{OUT} - v_{DS1}$。由于 $V_{GG2} - V_{T2} \gg v_{DS1}$，线性化电流为 $I \cong \beta_2(V_{GG2}-V_{T2})v_{DS2}$ → $v_{DS2} = \dfrac{I}{\beta_2(V_{GG2}-V_{T2})}$。
- 相加：$v_{OUT}(\min) = v_{DS1} + v_{DS2} = I\left[\dfrac{1}{\beta_1(V_{DD}-V_{T1})} + \dfrac{1}{\beta_2(V_{GG2}-V_{T2})}\right]$。
- 代入 $\beta_1 = \beta_2$ 和 $I$ 的值：$v_{OUT}(\min) = \dfrac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\dfrac{1}{V_{GG2}-V_{T2}} + \dfrac{1}{V_{DD}-V_{T1}}\right)$。

物理解释：M1 和 M2 相当于两个串联的沟道电阻 $1/[\beta(V_{GS}-V_T)]$，流过由 M3 设定的电流。
