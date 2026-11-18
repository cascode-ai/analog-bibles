从饱和点开始计量沟道长度调制：
$$i_D = \frac{K'W}{2L}(v_{GS}-V_T)^2\left[1+\lambda\left(v_{DS}-v_{DS}(\text{sat})\right)\right],\qquad v_{DS} \ge v_{DS}(\text{sat}) = v_{GS}-V_T.$$

- 在 $v_{DS} = v_{DS}(\text{sat})$ 处，非饱和区方程给出 $K'\frac{W}{L}\left[(v_{GS}-V_T) - \frac{v_{GS}-V_T}{2}\right](v_{GS}-V_T) = \frac{K'W}{2L}(v_{GS}-V_T)^2$。
- 原饱和区方程给出的是该值乘以 $(1 + \lambda v_{DS}(\text{sat}))$，即跳变了 $\lambda v_{DS}(\text{sat})$（例如 λ = 0.04 V⁻¹、$v_{DS}(\text{sat})$ = 1 V 时为 4%）。
- 采用修改后的因子，括号在 $v_{DS}(\text{sat})$ 处等于 1，两个方程在此衔接；在其上方，电流仍以斜率 $\lambda\frac{K'W}{2L}(v_{GS}-V_T)^2$ 上升。（斜率仍不连续：非饱和区一侧为零，饱和区一侧为 λ·$I_D$；只是电流变得连续。）
- 一种等价的修正是除以同一因子：$i_D = \frac{K'W}{2L}(v_{GS}-V_T)^2\frac{1+\lambda v_{DS}}{1+\lambda v_{DS}(\text{sat})}$。
