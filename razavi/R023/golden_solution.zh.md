令 $U=V_b-V_{TH}$，其中 $V_{TH}=0.7\,\mathrm V$、$\beta=\mu_nC_{ox}W/L$，取 $\lambda=0$。KCL 为 $I_X=-C_1\,dV_X/dt$。

| 偏置 | 电压与电流 |
|---|---|
| $U\le0$ | $V_X=3\,\mathrm V$、$I_X=0$。 |
| $0<U<3\,\mathrm V$ | 初始饱和：$I_X=\beta U^2/2$、$V_X=3\,\mathrm V-I_Xt/C_1$。在 $t_1=2C_1(3\,\mathrm V-U)/(\beta U^2)$ 时 $V_X=U$，其后在线性区衰减。 |
| $U\ge3\,\mathrm V$ | 从 $t=0$ 起即在线性区，无持续恒流阶段。 |

线性区内，

$$I_X=\beta(UV_X-V_X^2/2),\qquad V_X\to0,\quad I_X\to0.$$

当 $U>0$ 时，晚期时间常数为 $C_1/(\beta U)$；整个线性区过程并非纯指数。饱和转线性区时，电压、电流和电压斜率连续。因题中未指定 $V_b$、$C_1$ 和 $\beta$，图使用明确标注的示例参数。

![答案曲线：voltage](/q/R023/solution-voltage.zh.svg)

![答案曲线：current](/q/R023/solution-current.zh.svg)
